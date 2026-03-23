'use strict';
const {
  Model,
  BelongsTo
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Images.belongsTo(models.Products, { foreignKey: 'productID', as: 'Product' });
      // define association here
    }
  }
  Images.init({
    imageID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    productID: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};