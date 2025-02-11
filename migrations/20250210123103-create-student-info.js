'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      paidfees: {
        type: Sequelize.STRING
      },
      pendingfees: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      joiningdate: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      howyoufind: {
        type: Sequelize.STRING
      },
      managedby: {
        type: Sequelize.INTEGER
      },
      batch: {
        type: Sequelize.STRING
      },
      fees: {
        type: Sequelize.STRING
      },
      mode: {
        type: Sequelize.STRING
      },
      payment_status: {
        type: Sequelize.BOOLEAN
      },
      profile: {
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
    await queryInterface.dropTable('studentInfos');
  }
};