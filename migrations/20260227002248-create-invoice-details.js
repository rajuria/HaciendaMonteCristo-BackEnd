'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InvoiceDetails', {
      invoiceDetailID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      invoiceID: {
        references: {model: 'Invoices',key: 'invoiceID'},
        allowNull: false,
        type: Sequelize.STRING
      },
      productID: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      pricePerItem: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InvoiceDetails');
  }
};