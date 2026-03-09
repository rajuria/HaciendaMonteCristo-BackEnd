'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Orders, { foreignKey: 'orderID', as: 'Order' });
      this.hasMany(models.Products, { foreignKey: 'productID', as: 'Product' });
      // define association here
    }
  }
  OrderDetails.init({
    orderDetailID: DataTypes.STRING,
    orderID: DataTypes.STRING,
    productID: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    pricePerItem: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};