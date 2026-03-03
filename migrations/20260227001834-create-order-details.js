'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      orderDetailID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      orderID: {
        references: {model: 'Orders',key: 'orderID'},
        allowNull: false,
        type: Sequelize.STRING
      },
      productID: {
        allowNull: false,
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
    await queryInterface.dropTable('OrderDetails');
  }
};