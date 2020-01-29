const express = require('express')
const users = express.Router()
const cors =  require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')

const User = require('../models/Users');
users.use(cors())

process.env.SECTRET_KEY = 'secret'


module.exports = users;