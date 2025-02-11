const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authendication')
const studentController = require('../controller/studentinfo.controller');

const router = express.Router();

router.get('/getall', authenticateUser, authorizeRoles('admin', 'staff'), studentController.getAllStudents);
router.get('/getstudent/:id', authenticateUser, authorizeRoles('admin', 'staff'), studentController.getStudentById);
router.post('/create', authenticateUser, authorizeRoles('admin'), studentController.createStudent);
router.put('/update/:id', authenticateUser, authorizeRoles('admin'), studentController.updateStudent);
router.delete('/delete/:id', authenticateUser, authorizeRoles('admin'), studentController.deleteStudent);

module.exports = router;
