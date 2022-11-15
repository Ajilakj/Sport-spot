const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sport extends Model {}

Sport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "sport",
  }
);

module.exports = Sport;
