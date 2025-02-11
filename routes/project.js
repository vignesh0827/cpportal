const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authendication');
const projectController = require('../controller/dynamic.controller');

const router = express.Router();

router.get('/getall', authenticateUser, authorizeRoles('admin', 'staff'), projectController.getAll);
router.get('/getproject/:id', authenticateUser, authorizeRoles('admin', 'staff'), projectController.getById);
router.post('/create', authenticateUser, authorizeRoles('admin'), projectController.create);
router.put('/update/:id', authenticateUser, authorizeRoles('admin'), projectController.update);
router.delete('/delete/:id', authenticateUser, authorizeRoles('admin'), projectController.delete);

module.exports = router;
