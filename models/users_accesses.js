'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Accesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Accesses.init({
    username: DataTypes.STRING,
    accessID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users_Accesses',
  });
  return Users_Accesses;
};