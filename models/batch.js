'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Batch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
        Batch.belongsTo(models.staffInfo, { foreignKey: "staff_id" });
        Batch.hasMany(models.studentInfo, { foreignKey: "batch_id" });
        Batch.hasMany(models.Activity, { foreignKey: "batch_id" });
      
    }
  }
  Batch.init({
    name: DataTypes.STRING,
    course: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    staff_id: DataTypes.INTEGER,
    completed_module: DataTypes.STRING,
    time: DataTypes.STRING,
    place: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Batch',
  });
  return Batch;
};