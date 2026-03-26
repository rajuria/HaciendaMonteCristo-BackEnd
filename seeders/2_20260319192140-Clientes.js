'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Clients", [
      {
        RTN: "04102001003925",
        name: "Rafael Ajuria",
        telephoneNumber: "+504 3392-1612",
        address: "Col. Las Palmas, Tegucigalpa",
        email: "rajuria@unitec.edu",
        username: "rajuria",
        status: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RTN: "04102001003926",
        name: "María López",
        telephoneNumber: "+504 3392-1613",
        address: "Col. El Prado, Tegucigalpa",
        email: "mlopez@outlook.com",
        username: "mlopez",
        status: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RTN: "04102001003927",
        name: "Carlos Martínez",
        telephoneNumber: "+504 3392-1614",
        address: "Col. Miraflores, Tegucigalpa",
        email: "cmartinez@outlook.com",
        username: null,
        status: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Clients", null, {});
  }
};
