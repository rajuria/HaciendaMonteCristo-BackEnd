'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clients.belongsTo(models.Users, { foreignKey: 'username', as: 'User' });
      Clients.hasMany(models.Orders, { foreignKey: 'RTN', as: 'Orders' });
      Clients.hasMany(models.Invoice, { foreignKey: 'RTN', as: 'Invoices' });
    }
  }
  Clients.init({
    RTN: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    telephoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};