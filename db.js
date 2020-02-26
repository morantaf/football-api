const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:football@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("Database synchronized"))
  .catch(err => console.error(err));

module.exports = db;
