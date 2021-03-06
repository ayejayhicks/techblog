const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creating our Post model
class Post extends Model {}

// creating columns for the Post model table
Post.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        post_content: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
      }
);

module.exports = Post;