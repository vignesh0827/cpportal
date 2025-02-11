const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authendication');
const activityController = require('../controller/dynamic.controller');

const router = express.Router();

router.get('/allactivity', authenticateUser, authorizeRoles('admin', 'staff'), activityController.getAll);
router.get('/getactivebyid/:id', authenticateUser, authorizeRoles('admin', 'staff'), activityController.getById);
router.post('/create', authenticateUser, authorizeRoles('admin'), activityController.create);
router.put('/update/:id', authenticateUser, authorizeRoles('admin'), activityController.update);
router.delete('/delete/:id', authenticateUser, authorizeRoles('admin'), activityController.delete);

module.exports = router;
