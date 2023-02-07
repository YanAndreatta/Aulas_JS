/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false, // Permitir nulo
        unique: true, // Único na base de dados
      },
    );
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
