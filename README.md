# CRUD API using PostgreSQL & Express.js

## Install Dependencies

```bash
npm install
```

Or install packages manually:

```bash
npm install express pg dotenv joi cors
```

## Install Nodemon (Development)

```bash
npm install --save-dev nodemon
```

## Run PostgreSQL with Docker

```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=super -p 5432:5432 -d postgres
```

```bash
postgres ps
```

```bash
docker exec -it postgres-db psql -U postgres
```

## Start Server

The server runs on:

```text
http://localhost:5001
```
