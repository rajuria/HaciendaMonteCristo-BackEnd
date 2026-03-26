'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Orders, { foreignKey: 'orderID', as: 'Order' });
      this.hasMany(models.Invoice, { foreignKey: 'invoiceID', as: 'Invoice' });
      this.hasMany(models.Images, { foreignKey: 'productID', as: 'Images' });
      // define association here
    }
  }
  Products.init({
    productID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    currentPrice: DataTypes.DOUBLE,
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Activo'
  },
    currentStock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};