const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authendication');
const staffController = require('../controller/dynamic.controller');

const router = express.Router();

router.get('/getall', authenticateUser, authorizeRoles('admin'), staffController.getAll);
router.get('/getstaff/:id', authenticateUser, authorizeRoles('admin'), staffController.getById);
router.post('/create', authenticateUser, authorizeRoles('admin'), staffController.create);
router.put('/update/:id', authenticateUser, authorizeRoles('admin'), staffController.update);
router.delete('/delete/:id', authenticateUser, authorizeRoles('admin'), staffController.delete);

module.exports = router;
