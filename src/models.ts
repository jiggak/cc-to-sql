import * as Realm from "realm";

export type AccountInfo = {
   realmIdString: string;
   username?: string;
   password?: string;
   email: string;
   previouslyConfirmedEmail: string;
   unverifiedEmail: string;
   nickname: string;
   sex?: string;
   age?: number;
   symptoms: string;
   digestionLifeLimitation?: number;
   nutritionLimitation?: number;
   diagnosis: string;
   diagnosisTime: string;
   foodSensitivities: string;
   treatment: string;
   medications: Array<number | undefined>;
   customMedications: Array<string | undefined>;
   channels: Array<string | undefined>;
   onboardingDoneOnDate?: Date;
   timestampLastModified?: Date;
   timezone: string;
   needsSync: boolean;
   intercomTokenIosEmail: string;
   previousIntercomTokenIosEmail: string;
   intercomTokenAndroidEmail: string;
   previousIntercomTokenAndroidEmail: string;
   mixpanelToken: string;
   exportPersonalToken: string;
   exportShareToken: string;
   doNotTrack: boolean;
   stepsAndSymptomsEnabled?: boolean;
   didRestoreiOSAccountAfterSwiftMigration: boolean;
   favouriteRecipesId: Array<number>;
   favouriteFoodItems: Array<number>;
   foodItemRecentlyUsedIds: Array<string>;
   lastAcceptedPPVersion: number;
   subscription?: string;
};

export const AccountInfoSchema = {
   name: 'AccountInfo',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      username: 'string?',
      password: 'string?',
      email: 'string',
      previouslyConfirmedEmail: 'string',
      unverifiedEmail: 'string',
      nickname: 'string',
      sex: 'string?',
      age: 'int?',
      symptoms: 'string',
      digestionLifeLimitation: 'int?',
      nutritionLimitation: 'int?',
      diagnosis: 'string',
      diagnosisTime: 'string',
      foodSensitivities: 'string',
      treatment: 'string',
      medications: 'int?[]',
      customMedications: 'string?[]',
      channels: 'string?[]',
      onboardingDoneOnDate: 'date?',
      timestampLastModified: 'date?',
      timezone: 'string',
      needsSync: 'bool',
      intercomTokenIosEmail: 'string',
      previousIntercomTokenIosEmail: 'string',
      intercomTokenAndroidEmail: 'string',
      previousIntercomTokenAndroidEmail: 'string',
      mixpanelToken: 'string',
      exportPersonalToken: 'string',
      exportShareToken: 'string',
      doNotTrack: 'bool',
      stepsAndSymptomsEnabled: 'bool?',
      didRestoreiOSAccountAfterSwiftMigration: 'bool',
      favouriteRecipesId: 'int[]',
      favouriteFoodItems: 'int[]',
      foodItemRecentlyUsedIds: 'string[]',
      lastAcceptedPPVersion: 'int',
      subscription: 'string?'
   }
};

export type Activity = {
   id: number;
   order: number;
   action: string;
   track: string;
   image: string;
   title: string;
   subtitle: string;
   itemId?: number;
   url: string;
};

export const ActivitySchema = {
   name: 'Activity',
   primaryKey: 'id',
   properties: {
      id: 'int',
      order: 'int',
      action: 'string',
      track: 'string',
      image: 'string',
      title: 'string',
      subtitle: 'string',
      itemId: 'int?',
      url: 'string'
   }
};

export type AnswersSchema = {
   realmIdString: string;
   question: string;
   answered: Date;
   value?: string;
   choiceValues: Array<ChoiceSchema>;
   fileValues: Array<FileSchema>;
};

export const AnswersSchemaSchema = {
   name: 'AnswersSchema',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      question: 'string',
      answered: 'date',
      value: 'string?',
      choiceValues: 'ChoiceSchema[]',
      fileValues: 'FileSchema[]'
   }
};

export type ChoiceSchema = {
   realmIdString: string;
   id?: string;
   label: string;
};

export const ChoiceSchemaSchema = {
   name: 'ChoiceSchema',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      id: 'string?',
      label: 'string'
   }
};

export type ConditionalSchema = {
   realmIdString: string;
   condition: string;
   parameter: string;
   next?: string;
};

export const ConditionalSchemaSchema = {
   name: 'ConditionalSchema',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      condition: 'string',
      parameter: 'string',
      next: 'string?'
   }
};

export type CustomFoodItem = {
   realmIdString: string;
   name: string;
};

export const CustomFoodItemSchema = {
   name: 'CustomFoodItem',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      name: 'string'
   }
};

export type CustomTag = {
   realmId?: string;
   name?: string;
   trackingType?: string;
   orderingNumber?: number;
   deleted: boolean;
};

export const CustomTagSchema = {
   name: 'CustomTag',
   primaryKey: 'realmId',
   properties: {
      realmId: 'string?',
      name: 'string?',
      trackingType: 'string?',
      orderingNumber: 'int?',
      deleted: 'bool'
   }
};

export type Feedback = {
   id: string;
   rating: number;
   message: string;
   isSent: boolean;
};

export const FeedbackSchema = {
   name: 'Feedback',
   primaryKey: 'id',
   properties: {
      id: 'string',
      rating: 'int',
      message: 'string',
      isSent: 'bool'
   }
};

export type FileSchema = {
   realmIdString: string;
   id: number;
   name: string;
   url: string;
   mime?: string;
};

export const FileSchemaSchema = {
   name: 'FileSchema',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      id: 'int',
      name: 'string',
      url: 'string',
      mime: 'string?'
   }
};

export type FilterGroup = {
   id: number;
   name: string;
   online: boolean;
   tags: Array<FoodTagSchema>;
};

export const FilterGroupSchema = {
   name: 'FilterGroup',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string',
      online: 'bool',
      tags: 'FoodTagSchema[]'
   }
};

export type FoodGroupSchema = {
   id: number;
   name?: string;
   order?: number;
};

export const FoodGroupSchemaSchema = {
   name: 'FoodGroupSchema',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string?',
      order: 'int?'
   }
};

export type FoodItem = {
   id: number;
   name: string;
   name_en: string;
   imageUrl: string;
   foodItemDescription?: string;
   category: string;
   rating?: number;
   R1_gluten?: boolean;
   R2_lactose?: boolean;
   R2_lactose_allowed_quantity?: string;
   R2_lactose_comment?: string;
   R3_lactose_carbs?: boolean;
   R4_fructose?: boolean;
   R5_onions?: boolean;
   R6_cabbage?: boolean;
   R7_stonefruit?: boolean;
   R8_pomes?: boolean;
   R9_pulses?: boolean;
   R10_polyols?: boolean;
   R11_caffeine?: boolean;
   R12_alcohol?: boolean;
   R13_softdrinks?: boolean;
   R14_chewinggum?: boolean;
   R15_driedfruit?: boolean;
   adjustment?: number;
   Adjustment_comment?: string;
   synonyms?: string;
   synonyms_en?: string;
   substitutes?: string;
   deleted: boolean;
};

export const FoodItemSchema = {
   name: 'FoodItem',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string',
      name_en: 'string',
      imageUrl: 'string',
      foodItemDescription: 'string?',
      category: 'string',
      rating: 'double?',
      R1_gluten: 'bool?',
      R2_lactose: 'bool?',
      R2_lactose_allowed_quantity: 'string?',
      R2_lactose_comment: 'string?',
      R3_lactose_carbs: 'bool?',
      R4_fructose: 'bool?',
      R5_onions: 'bool?',
      R6_cabbage: 'bool?',
      R7_stonefruit: 'bool?',
      R8_pomes: 'bool?',
      R9_pulses: 'bool?',
      R10_polyols: 'bool?',
      R11_caffeine: 'bool?',
      R12_alcohol: 'bool?',
      R13_softdrinks: 'bool?',
      R14_chewinggum: 'bool?',
      R15_driedfruit: 'bool?',
      adjustment: 'double?',
      Adjustment_comment: 'string?',
      synonyms: 'string?',
      synonyms_en: 'string?',
      substitutes: 'string?',
      deleted: 'bool'
   }
};

export type FoodItemSchema = {
   id: number;
   name?: string;
   synonyms?: string;
   image?: string;
   group?: FoodGroupSchema;
   tags: Array<FoodTagSchema>;
   substitutes: Array<number>;
};

export const FoodItemSchemaSchema = {
   name: 'FoodItemSchema',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string?',
      synonyms: 'string?',
      image: 'string?',
      group: 'FoodGroupSchema',
      tags: 'FoodTagSchema[]',
      substitutes: 'int[]'
   }
};

export type FoodTagSchema = {
   id: number;
   name?: string;
};

export const FoodTagSchemaSchema = {
   name: 'FoodTagSchema',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string?'
   }
};

export type MealItem = {
   realmIdString: string;
   name?: string;
   orderingNumber?: number;
   foodItems: Array<FoodItem>;
   foodItemSchemas: Array<FoodItemSchema>;
   customFoodItems: Array<CustomFoodItem>;
   isFavourite: boolean;
   timestampLastModified?: Date;
   imagePath?: string;
   needsImageSync: boolean;
   needsSync: boolean;
   recipe?: Recipe;
   deleted: boolean;
};

export const MealItemSchema = {
   name: 'MealItem',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      name: 'string?',
      orderingNumber: 'int?',
      foodItems: 'FoodItem[]',
      foodItemSchemas: 'FoodItemSchema[]',
      customFoodItems: 'CustomFoodItem[]',
      isFavourite: 'bool',
      timestampLastModified: 'date?',
      imagePath: 'string?',
      needsImageSync: 'bool',
      needsSync: 'bool',
      recipe: 'Recipe',
      deleted: 'bool'
   }
};

export type Medication = {
   id?: number;
   name?: string;
   activeComponents?: string;
   defaultUnit?: MedicationUnit;
   source?: string;
   barCodes?: string;
   deleted: boolean;
};

export const MedicationSchema = {
   name: 'Medication',
   primaryKey: 'id',
   properties: {
      id: 'int?',
      name: 'string?',
      activeComponents: 'string?',
      defaultUnit: 'MedicationUnit',
      source: 'string?',
      barCodes: 'string?',
      deleted: 'bool'
   }
};

export type MedicationCustom = {
   realmIdString?: string;
   id?: number;
   name?: string;
   activeComponents?: string;
   defaultUnit?: MedicationUnit;
   source?: string;
   barCodes?: string;
   deleted: boolean;
};

export const MedicationCustomSchema = {
   name: 'MedicationCustom',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string?',
      id: 'int?',
      name: 'string?',
      activeComponents: 'string?',
      defaultUnit: 'MedicationUnit',
      source: 'string?',
      barCodes: 'string?',
      deleted: 'bool'
   }
};

export type MedicationUnit = {
   id?: number;
   name?: string;
   siUnit?: string;
   deleted: boolean;
};

export const MedicationUnitSchema = {
   name: 'MedicationUnit',
   primaryKey: 'id',
   properties: {
      id: 'int?',
      name: 'string?',
      siUnit: 'string?',
      deleted: 'bool'
   }
};

export type Purchase = {
   id: string;
   transactionReceipt: string;
   productId: string;
   transactionDate: number;
};

export const PurchaseSchema = {
   name: 'Purchase',
   primaryKey: 'id',
   properties: {
      id: 'string',
      transactionReceipt: 'string',
      productId: 'string',
      transactionDate: 'int'
   }
};

export type QuestionSchema = {
   realmIdString: string;
   slug: string;
   question: string;
   explanation: string;
   placeholder?: string;
   type: string;
   choices: Array<ChoiceSchema>;
   minimum?: number;
   maximum?: number;
   required: boolean;
   conditionals: Array<ConditionalSchema>;
   next?: string;
   milestone: boolean;
};

export const QuestionSchemaSchema = {
   name: 'QuestionSchema',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      slug: 'string',
      question: 'string',
      explanation: 'string',
      placeholder: 'string?',
      type: 'string',
      choices: 'ChoiceSchema[]',
      minimum: 'int?',
      maximum: 'int?',
      required: 'bool',
      conditionals: 'ConditionalSchema[]',
      next: 'string?',
      milestone: 'bool'
   }
};

export type QuestionnaireSchema = {
   realmIdString: string;
   name: string;
   head: string;
   slug: string;
   completed?: Date;
   id?: number;
   milestones: number;
   questions: Array<QuestionSchema>;
   answers: Array<AnswersSchema>;
   waitingForPatch: boolean;
};

export const QuestionnaireSchemaSchema = {
   name: 'QuestionnaireSchema',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      name: 'string',
      head: 'string',
      slug: 'string',
      completed: 'date?',
      id: 'int?',
      milestones: 'int',
      questions: 'QuestionSchema[]',
      answers: 'AnswersSchema[]',
      waitingForPatch: 'bool'
   }
};

export type Recipe = {
   id: number;
   name: string;
   preparation: string;
   portions: string;
   category: number;
   subcategory: number;
   difficulty: number;
   cookingTime: number;
   workTime: number;
   totalTime: number;
   introduction: string;
   ingredients: string;
   image: string;
   eggFree: boolean;
   fiberRich: boolean;
   fructoseFree: boolean;
   glutenFree: boolean;
   lactoseFree: boolean;
   lowFodmap: boolean;
   lowHistamine: boolean;
   milkFree: boolean;
   vegan: boolean;
   vegetarian: boolean;
   published: boolean;
};

export const RecipeSchema = {
   name: 'Recipe',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string',
      preparation: 'string',
      portions: 'string',
      category: 'int',
      subcategory: 'int',
      difficulty: 'int',
      cookingTime: 'int',
      workTime: 'int',
      totalTime: 'int',
      introduction: 'string',
      ingredients: 'string',
      image: 'string',
      eggFree: 'bool',
      fiberRich: 'bool',
      fructoseFree: 'bool',
      glutenFree: 'bool',
      lactoseFree: 'bool',
      lowFodmap: 'bool',
      lowHistamine: 'bool',
      milkFree: 'bool',
      vegan: 'bool',
      vegetarian: 'bool',
      published: 'bool'
   }
};

export type RecipeCategory = {
   id: number;
   name: string;
   image?: string;
   isDeleted: boolean;
   order: number;
};

export const RecipeCategorySchema = {
   name: 'RecipeCategory',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string',
      image: 'string?',
      isDeleted: 'bool',
      order: 'int'
   }
};

export type RecipeSubcategory = {
   id: number;
   name: string;
   parent?: RecipeCategory;
   order: number;
   isDeleted: boolean;
};

export const RecipeSubcategorySchema = {
   name: 'RecipeSubcategory',
   primaryKey: 'id',
   properties: {
      id: 'int',
      name: 'string',
      parent: 'RecipeCategory',
      order: 'int',
      isDeleted: 'bool'
   }
};

export type Reminder = {
   realmIdString: string;
   hour?: number;
   minute?: number;
   reminderDefaultNameKey?: string;
   reminderName?: string;
   isActive?: boolean;
   activeOnWeekdays?: number;
   isSmartReminder?: boolean;
   isDeleted: boolean;
};

export const ReminderSchema = {
   name: 'Reminder',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      hour: 'int?',
      minute: 'int?',
      reminderDefaultNameKey: 'string?',
      reminderName: 'string?',
      isActive: 'bool?',
      activeOnWeekdays: 'int?',
      isSmartReminder: 'bool?',
      isDeleted: 'bool'
   }
};

export type TrackingCategoryElement = {
   categoryType: string;
   isActive: boolean;
   indexPosition: number;
};

export const TrackingCategoryElementSchema = {
   name: 'TrackingCategoryElement',
   primaryKey: 'categoryType',
   properties: {
      categoryType: 'string',
      isActive: 'bool',
      indexPosition: 'double'
   }
};

export type TrackingData = {
   realmIdString: string;
   trackingType: string;
   text?: string;
   value?: number;
   mealItems: Array<MealItem>;
   medication?: Medication;
   medicationUnit?: MedicationUnit;
   tags?: string;
   timestamptracking?: Date;
   timestampLastModified?: Date;
   timestampentry?: Date;
   needsSync?: boolean;
   deleted: boolean;
};

export const TrackingDataSchema = {
   name: 'TrackingData',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      trackingType: 'string',
      text: 'string?',
      value: 'double?',
      mealItems: 'MealItem[]',
      medication: 'Medication',
      medicationUnit: 'MedicationUnit',
      tags: 'string?',
      timestamptracking: 'date?',
      timestampLastModified: 'date?',
      timestampentry: 'date?',
      needsSync: 'bool?',
      deleted: 'bool'
   }
};

export type UserSetting = {
   realmIdString: string;
   language?: string;
};

export const UserSettingSchema = {
   name: 'UserSetting',
   primaryKey: 'realmIdString',
   properties: {
      realmIdString: 'string',
      language: 'string?'
   }
};

export const Schema = [AccountInfoSchema, ActivitySchema, AnswersSchemaSchema, ChoiceSchemaSchema, ConditionalSchemaSchema, CustomFoodItemSchema, CustomTagSchema, FeedbackSchema, FileSchemaSchema, FilterGroupSchema, FoodGroupSchemaSchema, FoodItemSchema, FoodItemSchemaSchema, FoodTagSchemaSchema, MealItemSchema, MedicationSchema, MedicationCustomSchema, MedicationUnitSchema, PurchaseSchema, QuestionSchemaSchema, QuestionnaireSchemaSchema, RecipeSchema, RecipeCategorySchema, RecipeSubcategorySchema, ReminderSchema, TrackingCategoryElementSchema, TrackingDataSchema, UserSettingSchema];
