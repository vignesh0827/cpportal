var express = require('express');
var { authenticateUser, authorizeRoles } = require('../middleware/authendication');
var userController = require('../controller/user.controller');

var router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/getuser', authenticateUser, authorizeRoles('admin'), userController.getUsers);

module.exports = router;
