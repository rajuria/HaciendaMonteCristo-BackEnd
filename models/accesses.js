'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Accesses.HasMany(models.users_accesses, { foreignKey: 'accessID', as: 'UsersAccesses' });
    }
  }
  Accesses.init({
    accessID: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Accesses',
  });
  return Accesses;
};