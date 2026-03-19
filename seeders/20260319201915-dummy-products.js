'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        productID: 'P001',
        name: 'Café Molido Premium',
        currentPrice: 180.50,
        currentStock: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productID: 'P002',
        name: 'Miel Natural',
        currentPrice: 120.00,
        currentStock: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productID: 'P003',
        name: 'Queso Artesanal',
        currentPrice: 95.00,
        currentStock: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', {
      productID: ['P001', 'P002', 'P003']
    }, {});
  }
};