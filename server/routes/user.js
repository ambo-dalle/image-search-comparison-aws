const User = require('../controllers/user');
const router = require('express').Router();

router.post('/signin', User.signin);
router.post('/signup', User.signup);
router.get('/', User.checkUser);

module.exports = router;