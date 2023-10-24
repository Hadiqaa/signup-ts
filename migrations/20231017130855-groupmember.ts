'use strict';
import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : QueryInterface, Sequelize : Sequelize) {
    await queryInterface.createTable('GroupMember', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      group_id : {
        type: DataTypes.INTEGER.UNSIGNED ,
        allowNull: false,
        references: { model: 'Group', key: 'id' }
      },
  
      user_id : {
        type: DataTypes.INTEGER.UNSIGNED ,
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
    await queryInterface.dropTable('GroupMember');
  }
};
