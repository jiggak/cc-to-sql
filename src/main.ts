import fs from 'fs/promises';
import Realm from 'realm';
import sqlite3 from 'sqlite3';
import { open as dbopen } from 'sqlite';
import { Schema, TrackingData } from './models';

function getTags(tagsIn?: string) {
   let tags = tagsIn?.split('|');

   return tags?.map(t => {
      switch (t) {
         case 'Tiny volume':
            return 'tiny';
         case 'Low volume':
            return 'low';
         case 'Medium volume':
            return 'medium';
         case 'High volume':
            return 'high';
         case 'Thin ribbon':
            return 'ribbon';
         default:
            return t;
      }
   });
}

function getStoolType(value: number) {
   switch (value) {
      case 100: return 'liquid';
      case 85: return 'mushy';
      case 71: return 'soft-blobs';
      case 57: return 'smooth-log';
      case 42: return 'cracked-log';
      case 28: return 'lumpy-log';
      case 14: return 'hard-lumps';
      case 0: return 'none';
      default: throw `Unhandled stool type value ${value}`;
   }
}

function getStoolVolume(tags?: string[]) {
   if (tags?.includes('tiny')) {
      if (tags?.includes('low')) {
         return 0.5;
      }

      return 0.1;
   }

   if (tags?.includes('low')) {
      if (tags?.includes('medium')) {
         return 1.5;
      }

      return 1.0;
   }

   if (tags?.includes('medium')) {
      if (tags?.includes('high')) {
         return 2.5;
      }

      return 2.0;
   }

   if (tags?.includes('high')) {
      return 3.0;
   }

   return 0.0;
}

function getSleep(value: number) {
   switch (value) {
      case 100: return '>8';
      case 75: return '6-8';
      case 50: return '4-6';
      case 25: return '2-4';
      case 0: return '<2';
      default: throw `Unhandled sleep value ${value}`;
   }
}

async function main() {
   const initSql = await fs.readFile('init.sql', { encoding: 'utf-8' });

   const realm = await Realm.open({
      schemaVersion: 67,
      schema: Schema,
      path: '../apps/com.gohidoc.cara/f/default.realm',
   });

   await fs.rm('logs.db');

   const db = await dbopen({
      filename: 'logs.db',
      driver: sqlite3.Database
   });

   await db.exec(initSql);

   const stmt = await db.prepare(
      'insert into logs values (@logType, @timestamp, @logText, @stoolType, @stoolVolume, @suckScore, @tags)'
   );

   const tracking = realm.objects<TrackingData>('TrackingData');

   const suckScoreRegex = /SuckScore:\s([^ ,]+)(?:, | - )?(.*)?/;

   for (const t of tracking) {
      if (t.deleted) continue;

      let tags = getTags(t.tags);
      let logText = t.text;
      let logType = t.trackingType;
      if (logType == 'medications2') {
         logType = 'medication';
      }

      let stoolType, stoolVolume, suckScore;

      if (logType == 'stool') {
         stoolType = getStoolType(t.value as number);
         stoolVolume = getStoolVolume(tags);
      } else if (logType == 'food') {
         if (t.mealItems.length != 1) {
            throw 'Expected mealItems.length == 1';
         }

         const meal = t.mealItems[0];
         logText = meal.name;

         tags = meal.foodItemSchemas.map(f => f.name as string);
      } else if (logType == 'additionalSymptoms') {
         if (logText?.startsWith('SuckScore')) {
            const result = suckScoreRegex.exec(logText)!;
            suckScore = parseFloat(result[1]);
            if (result.length > 2) {
               logText = result[2];
            }
         }
      } else if (logType == 'medication') {
         if (!logText) {
            logText = t.medication?.name;
         }
      } else if (logType == 'sleep') {
         logText = getSleep(t.value!);
      }

      await stmt.run({
         '@logType': logType,
         '@logText': logText,
         '@stoolType': stoolType,
         '@stoolVolume': stoolVolume,
         '@timestamp': t.timestamptracking?.toISOString(),
         '@suckScore': suckScore,
         '@tags': JSON.stringify(tags)
      });
   }

   realm.close();
}

//(async () => await main())();
main()
   .then(() => console.log('done'))
   .catch(e => console.error(e))
   .finally(() => process.exit());
