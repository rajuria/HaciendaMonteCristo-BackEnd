'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Clients, { foreignKey: 'RTN', as: 'Client' });
      this.hasOne(models.TransferConfirmations, { foreignKey: 'orderID', as: 'TransferConfirmation' });
      // define association here
    }
  }
  Orders.init({
    orderID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    RTN: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};