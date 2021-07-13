require("dotenv").config(); //access to .env variables
const { CLIENT, DATABASE, PG_USER, PASSWORD, HOST, PG_PORT } = process.env
// Update with your config settings.
const database = {
  client: 'pg',
      connection: {
          host: 'localhost',
          database: 'dev'
      },
      migrations: {
          directory: './data/migrations'
      },
      seeds: { 
          directory: './data/seeds' 
      },
  };

module.exports = {
    development: {
      client: 'postgresql',
      connection: 'postgres://dcxloltc:AgpHsprrf0Z2vgM9Vm11cOsXAU4s-KZx@tai.db.elephantsql.com/dcxloltc'
      ,
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
       directory: './data/seeds',
      },

  },

  testing: {
    ...database,
    connection: {
      port: process.env.POSTGRES_PORT,
      database: 'test',
      user: process.env.USER,
      password: process.env.PASSWORD
    },
    tableName: 'knex_migrations'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
     directory: './data/seeds',
    },
  },

};
