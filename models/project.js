'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.studentInfo, { foreignKey: "student_id" });
    }
  }
  Project.init({
    student_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    github_link: DataTypes.STRING,
    submission_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};