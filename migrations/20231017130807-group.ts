'use strict';


/** @type {import('sequelize-cli').Migration} */
import { QueryInterface, DataTypes, Sequelize } from 'sequelize';
module.exports = {
  async up (queryInterface : QueryInterface, Sequelize : Sequelize) {
    await queryInterface.createTable('Group', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      group_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      creator_id : {
        type: DataTypes.INTEGER ,
        allowNull: false,
        references: { model: 'Users', key: 'id' }
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

  async down (queryInterface : QueryInterface, Sequelize : Sequelize) {
    await queryInterface.dropTable('Group');
  }
};
