'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransferConfirmations', {
      confirmationID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      orderID: {
        references: {model: 'Orders',key: 'orderID'},
        allowNull: false,
        type: Sequelize.STRING
      },
      invoiceID: {
        references: {model: 'Invoices',key: 'invoiceID'},
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      confirmation: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('TransferConfirmations');
  }
};