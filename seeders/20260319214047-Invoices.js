'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Invoices", [
      {
        invoiceID: "INV000001",
        orderID: "ORD000001",
        RTN: "04102001003925",
        status: "emitida",
        payentMethod: "Transferencia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        invoiceID: "INV000002",
        orderID: "ORD000002",
        RTN: "04102001003926",
        status: "completada",
        payentMethod: "Transferencia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        invoiceID: "INV000003",
        orderID: "ORD000003",
        RTN: "04102001003927",
        status: "emitida",
        payentMethod: "Efectivo",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Invoices", null, {});
  }
};
