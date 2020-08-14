'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };

  User.init({
    username: {
      allowNull: false,
      primaryKey: true,
      validate: {
				is: /^\w{3,}$/
			},
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      validate: {
				is: /^\w{3,}$/
			},
      type: DataTypes.STRING
    },
    inline: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  
  return User;
};