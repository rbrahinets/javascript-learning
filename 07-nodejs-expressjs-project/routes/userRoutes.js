const express = require('express');
const {
    getCurrentUser,
    signUpUser,
    signInUser,
} = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.route('/current').get(validateToken, getCurrentUser);
router.route('/sign-up').post(signUpUser);
router.route('/sign-in').post(signInUser);

module.exports = router;
