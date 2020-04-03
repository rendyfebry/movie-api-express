# Movie DB API

Simple movie API using omdbapi database.

## Prerequisite

- Node v10.x
- NPM v6.x

## Installation

```
npm install
```

## Environment Variables

1. Copy .env file

```
cp config/.env.example .env
```

2. Fill the OMDB_KEY on .env file

## Running

Development mode

```
npm run dev
```

Production mode

```
npm start
```

Run in Docker

```
docker-compose up
```

## API Request

Search Movie

```
curl -L -X GET 'localhost:3000/search?q=batman'
```

Get Movie Detail

```
curl -L -X GET 'localhost:3000/detail/tt2975590'
```

## Test

```
npm run test
```
