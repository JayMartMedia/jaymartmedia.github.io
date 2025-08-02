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
3. `\password` OR (for other user) `ALTER ROLE postgres WITH LOGIN PASSWORD 'password';`