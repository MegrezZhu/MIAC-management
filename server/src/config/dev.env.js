const path = require('path');

module.exports = {
  port: 3000,
  static: path.join(__dirname, '..', '..', '..', 'client/dist'),
  db: {
    host: 'localhost',
    username: 'miac',
    password: 'miac',
    database: 'miac',
    port: 27017,
  },
  log: {
    appenders: [
      {
        type: 'console',
      },
      {
        type: 'dateFile',
        filename: 'logs/error',
        pattern: '-MM-dd.log',
        alwaysIncludePattern: true,
        category: 'error',
      },
      {
        type: 'dateFile',
        filename: 'logs/debug',
        pattern: '-MM-dd.log',
        alwaysIncludePattern: true,
        category: 'debug',
      },
    ],
  },
};
