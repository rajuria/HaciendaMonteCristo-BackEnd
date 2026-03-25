'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "rajuria",
        name: "Rafael Ajuria",
        password: "password123",
        roleID: "Cliente",
        status: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "mlopez",
        name: "María López",
        password: "password123",
        roleID: "Vendedor",
        status: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
