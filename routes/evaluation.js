const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authendication');
const evaluationController = require('../controller/dynamic.controller');

const router = express.Router();

router.get('/getall', authenticateUser, authorizeRoles('admin', 'staff'), evaluationController.getAll);
router.get('/geteve/:id', authenticateUser, authorizeRoles('admin', 'staff'), evaluationController.getById);
router.post('/create', authenticateUser, authorizeRoles('admin'), evaluationController.create);
router.put('/update/:id', authenticateUser, authorizeRoles('admin'), evaluationController.update);
router.delete('/delete/:id', authenticateUser, authorizeRoles('admin'), evaluationController.delete);

module.exports = router;
