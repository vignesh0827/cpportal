const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authendication');
const batchController = require('../controller/dynamic.controller');

const router = express.Router();

router.get('/getall', authenticateUser, authorizeRoles('admin', 'staff'), batchController.getAll);
router.get('/getbatch/:id', authenticateUser, authorizeRoles('admin', 'staff'), batchController.getById);
router.post('/create', authenticateUser, authorizeRoles('admin'), batchController.create);
router.put('/update/:id', authenticateUser, authorizeRoles('admin'), batchController.update);
router.delete('/delete/:id', authenticateUser, authorizeRoles('admin'), batchController.delete);

module.exports = router;
