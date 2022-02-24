const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
const config = require("./config");
const tutorialModel = require("../models/tutorial.model");

const db = {};

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, schema } = config.database;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${schema}\`;`);

  // connect to db
  const sequelize = new Sequelize(schema, user, password, { dialect: "mysql" });

  // init models and add them to the exported db object
  db.Tutorial = tutorialModel(sequelize);

  // sync all models with database
  await sequelize.sync({ alter: false });
}

initialize();

module.exports = db;
