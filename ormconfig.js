
if (process.env.DEV_MODE) {
  require('dotenv').config({path: __dirname + '/apps/backend/.env'})
}

module.exports={
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PW,
  "database": process.env.DB_NAME,
  "synchronize": false,
  "logging": true,
  "entities": [
    "apps/backend/src/app/entities/**/*.entity.ts"
  ],
  "migrations": [
    "apps/backend/src/app/migration/**/*.ts"
  ],
  "subscribers": [
    "apps/backend/src/app/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "apps/backend/src/app/entity",
    "migrationsDir": "apps/backend/src/app/migration",
    "subscribersDir": "apps/backend/src/app/subscriber"
  }
}
