'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('users', { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    birth: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING,  
      allowNull: false,
    },
    password: {
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
     return await queryInterface.dropTable('users');
  }
};