// Update with your config settings.
const dbConnection = process.env.DATABASE_URL
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/data.db3'
    },
    migrations: {
      directory: './database/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    }
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/testdb.db3'
    },
    migrations: {
      directory: './database/migrations'
    }
  }

};
