'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("OrderDetails", [
      {
        orderDetailID: "ORDD000001",
        orderID: "ORD000001",
        productID: "1",
        quantity: 2,
        pricePerItem: 200,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        orderDetailID: "ORDD000002",
        orderID: "ORD000001",
        productID: "2",
        quantity: 5,
        pricePerItem: 200,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        orderDetailID: "ORDD000003",
        orderID: "ORD000001",
        productID: "3",
        quantity: 2,
        pricePerItem: 200,
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("OrderDetails", null, {});
  }
};
