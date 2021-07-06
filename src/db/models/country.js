const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      this.hasMany(models.Region, {
        sourceKey: "code",
        foreignKey: "countryId"
      })
    }
  }
  Country.init({
    code: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Code is required"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Name is required"
        }
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'Country',
    modelName: 'Country',
  })
  return Country
}