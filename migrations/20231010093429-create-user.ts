'use strict';
/** @type {import('sequelize-cli').Migration} */
import { QueryInterface, DataTypes, Sequelize } from 'sequelize';
module.exports = {
  async up(queryInterface : QueryInterface, Sequelize :Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface :QueryInterface, Sequelize : Sequelize) {
    await queryInterface.dropTable('Users');
  }
};