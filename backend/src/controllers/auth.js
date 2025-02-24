const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/protected', auth, (req, res) => {
  res.send('Esta es una ruta protegida');
});

module.exports = router;
