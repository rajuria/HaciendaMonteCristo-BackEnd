'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Invoice, { foreignKey: 'invoiceID', as: 'Invoice' });
      this.hasOne(models.Products, { foreignKey: 'productID', as: 'Product' });
      // define association here
    }
  }
  InvoiceDetails.init({
    invoiceDetailID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    invoiceID: DataTypes.STRING,
    productID: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    pricePerItem: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'InvoiceDetails',
  });
  return InvoiceDetails;
};