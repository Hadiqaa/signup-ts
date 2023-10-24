'use strict';
import { QueryInterface, DataTypes, Sequelize } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : QueryInterface, Sequelize : Sequelize) {
    await queryInterface.createTable('Message', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sender_id : {
        type: DataTypes.INTEGER.UNSIGNED ,
        allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      group_id : {
        type: DataTypes.INTEGER.UNSIGNED ,
        allowNull: true,
        references: { model: 'Group', key: 'id' }
      },
      reciever_id : {
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
    await queryInterface.dropTable('Message');
  }
};
