'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        productID: "1",
        name: "Cafe Montecristo(lb)",
        currentPrice: 200,
        currentStock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productID: "2",
        name: "Cafe Montecristo(Descafeinado)(lb)",
        currentPrice: 400,
        currentStock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productID: "3",
        name: "Cafe Montecristo(Instantaneo)(lb)",
        currentPrice: 250,
        currentStock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
