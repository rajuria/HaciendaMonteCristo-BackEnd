'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BelongsTo(models.Clients, { foreignKey: 'RTN', as: 'Client' });
      HasOne(models.SignedInvoices, { foreignKey: 'signedInvoiceID', as: 'SignedInvoice' });
      // define association here
    }
  }
  Invoice.init({
    invoiceID: DataTypes.STRING,
    orderID: DataTypes.STRING,
    RTN: DataTypes.STRING,
    status: DataTypes.STRING,
    paymentMethod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};