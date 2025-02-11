'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Evaluation.belongsTo(models.studentInfo, { foreignKey: "student_id" });
    }
  }
  Evaluation.init({
    student_id: DataTypes.INTEGER,
    module_name: DataTypes.STRING,
    marks: DataTypes.FLOAT,
    evaluator: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evaluation',
  });
  return Evaluation;
};