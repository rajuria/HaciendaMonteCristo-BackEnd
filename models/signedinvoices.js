'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SignedInvoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SignedInvoices.init({
    signedInvoiceID: DataTypes.STRING,
    orderID: DataTypes.STRING,
    status: DataTypes.STRING,
    signedInvoice: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SignedInvoices',
  });
  return SignedInvoices;
};