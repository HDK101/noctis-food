/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Food', [
      {
        name: 'Combo X-Salada + Batata',
        price: 3000, // R$ 30,00
        image: 'xsalada.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Foods', null, {});
  },
};
