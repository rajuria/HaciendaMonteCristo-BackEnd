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
      Invoice.belongsTo(models.Clients, { foreignKey: 'RTN', as: 'Client' });
      Invoice.hasOne(models.SignedInvoices, { foreignKey: 'signedInvoiceID', as: 'SignedInvoice' });
      // define association here
    }
  }
  Invoice.init({
    invoiceID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
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