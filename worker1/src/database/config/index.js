const {Sequelize} = require('sequelize');

const db_database = process.env.DB_DATABASE;
const db_password = process.env.DB_PASSWORD;
const db_user = process.env.DB_USER;
const db_host = process.env.DB_HOST;

const dialectOptions = process.env.DB_ENV === "development" ? {} : {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
};

const db_config = new Sequelize(db_database, db_user, db_password, {
  host: db_host,
  dialect: 'postgres',
  dialectOptions
});

module.exports = db_config;
