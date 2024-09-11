'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'path', {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface) {
    // Remova a constraint antes de tentar desfazer a migração

    // Remova apenas a coluna 'path' da tabela 'Categories'
    await queryInterface.removeColumn('Categories', 'path');
  }
};
