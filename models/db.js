/* const { Sequelize } = require("sequelize");

const defaultURL = "mysql://username:password@localhost/dbname";

const connection = new Sequelize(process.env.DATABASE_URL ?? defaultURL);

connection.authenticate().then(() => console.log("Database is ready"));

module.exports = connection; */

/* const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // Ou 'postgres', 'sqlite', selon ton choix
  logging: false,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import des modèles
db.User = require('./User')(sequelize, DataTypes);
db.Book = require('./Book')(sequelize, DataTypes);
db.Category = require('./Category')(sequelize, DataTypes);
db.Loan = require('./Loan')(sequelize, DataTypes);

// Associations des modèles
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports = db; */


const { Sequelize } = require("sequelize");

const connection = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 3306,
  dialect: process.env.DATABASE_DIALECT || "mysql",
  logging: console.log,
});

// Test de connexion
connection.authenticate()
  .then(() => console.log("✅ Connexion à la base de données réussie !"))
  .catch((error) => console.error("❌ Erreur de connexion :", error));

module.exports = connection;