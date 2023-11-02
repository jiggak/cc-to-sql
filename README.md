## Backup app data

	adb backup -noapk com.gohidoc.cara


## Extract backup data

	java -jar abe.jar unpack backup.ab foo.tar
	tar xf foo.tar


## Select records where tags includes a value

```sql
select * from logs
where exists (
    select 1 from json_each(tags) where value = 'onion'
);
```