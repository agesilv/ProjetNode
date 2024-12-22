const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Loan extends Model {}

Loan.init(
  {
    borrow_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Loan;
