'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Users_Accesses, {
        foreignKey: 'username',
        sourceKey: 'username',
        as: 'UsersAccesses',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Users.hasOne(models.Clients, {
        foreignKey: 'username',
        sourceKey: 'username',
        as: 'Client',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }

  Users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize
  });

  return Users;
};
