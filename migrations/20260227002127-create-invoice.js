'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      invoiceID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      orderID: {
        type: Sequelize.STRING
      },
      RTN: {
        references: {model: 'Clients',key: 'RTN'},
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      paymentMethod: {
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
    await queryInterface.dropTable('Invoices');
  }
};