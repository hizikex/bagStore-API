const express = require('express');
const { signUp } = require('../controllers/user')

const Router = express.Router();

Router.route('/signin').post(signUp)

module.exports = Router