'use strict';
const {
  Model,
  BelongsTo
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.HasMany(models.Users_Accesses, { foreignKey: 'username', as: 'UsersAccesses' });
      Users.hasOne(models.Clients, { foreignKey: 'username', as: 'Client' });
    }
  }
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    roleID: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};