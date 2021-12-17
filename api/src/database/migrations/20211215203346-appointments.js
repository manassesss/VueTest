'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('appointments', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    patient: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    doctor: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    schedule: {
      type: Sequelize.DATE,  
      allowNull: false,
    },
    field: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    });
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.dropTable('appointments');
  }
};