module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port : 3306,
      user: 'root',
      password: '',
      database: 'livre_mercado'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  test: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port : 3306,
      user: 'root',
      password: '',
      database: 'livre_mercado_test'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port : 3306,
      user: 'root',
      password: '',
      database: ''
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  production: {
    client: 'mysql',
    connection: {
      host: '',
      port : 3306,
      user: '',
      password: '',
      database: ''
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  }

};
