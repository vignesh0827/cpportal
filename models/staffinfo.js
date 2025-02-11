'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staffInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
      staffInfo.belongsTo(models.User, { foreignKey: "user_id" });
      staffInfo.hasMany(models.Batch, { foreignKey: "staff_id" });
      
    }
  }
  staffInfo.init({
    role: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    joiningdate: DataTypes.STRING,
    salary: DataTypes.STRING,
    batch: DataTypes.STRING,
    dob: DataTypes.STRING,
    qualification: DataTypes.STRING,
    facilty: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'staffInfo',
  });
  return staffInfo;
};