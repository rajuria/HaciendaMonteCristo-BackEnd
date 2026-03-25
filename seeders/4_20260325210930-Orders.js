'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Orders", [
      {
        orderID: "ORD000001",
        RTN: "04102001003925",
        vendedor: null,
        status: "Pendiente",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        orderID: "ORD000002",
        RTN: "04102001003926",
        vendedor: null,
        status: "Cancelada",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        orderID: "ORD000003",
        RTN: "04102001003925",
        vendedor: "mlopez",
        status: "Asignada",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Orders", null, {});
  }
};
