'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      joiningdate: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      batch: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      facilty: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('staffInfos');
  }
};