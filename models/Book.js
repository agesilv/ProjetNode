const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    published_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(["available", "borrowed"]),
      defaultValue: "available",
      allowNull: false,
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Book;

  