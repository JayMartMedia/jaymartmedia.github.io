# PostgreSQL

PostgreSQL is a free open source relational database.

`psql -U postgres` Log into Postgres as user 'postgres'

`\l` List all databases in Postgres

`\c {databasename}` Connect to database

`\d` List all tables in Postgres database

`\q` Disconnect from database

## Admin

`sudo systemctl restart postgresql` Restart postgres

## Set password for user

1. switch to OS user: `su - postgres`
2. connect: `psql`
3. `\password` OR (for other user named 'replication') `\password replication` OR `ALTER ROLE replication WITH LOGIN PASSWORD 'password';`

## Investigate locking
```sql
SELECT * FROM pg_locks;

SELECT pid, usename, pg_blocking_pids(pid) AS blocked_by, query AS blocked_query
FROM pg_stat_activity
WHERE cardinality(pg_blocking_pids(pid)) > 0;

SELECT pg_terminate_backend(1199812);
```

```sql
SELECT t.relname, l.locktype, page, virtualtransaction, pid, mode, granted
FROM pg_locks l, pg_stat_all_tables t 
WHERE l.relation = t.relid 
ORDER BY relation asc;
```
