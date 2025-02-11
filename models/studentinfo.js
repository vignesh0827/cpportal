'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
   
        studentInfo.belongsTo(models.User, { foreignKey: "user_id" });
        studentInfo.belongsTo(models.Batch, { foreignKey: "batch_id" });
        studentInfo.hasMany(models.Project, { foreignKey: "student_id" });
        studentInfo.hasMany(models.Evaluation, { foreignKey: "student_id" });
      
    };
  }
  studentInfo.init({
    user_id: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    paidfees: DataTypes.STRING,
    pendingfees: DataTypes.STRING,
    course: DataTypes.STRING,
    dob: DataTypes.STRING,
    qualification: DataTypes.STRING,
    joiningdate: DataTypes.STRING,
    occupation: DataTypes.STRING,
    howyoufind: DataTypes.STRING,
    managedby: DataTypes.INTEGER,
    batch: DataTypes.STRING,
    fees: DataTypes.STRING,
    mode: DataTypes.STRING,
    payment_status: DataTypes.BOOLEAN,
    profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'studentInfo',
  });
  return studentInfo;
};