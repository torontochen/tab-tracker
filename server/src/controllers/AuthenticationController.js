const {User} = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcryptjs')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {

      console.log(req.body)
      const newUser =  {
        email: req.body.email,
        password: req.body.password
      }
     // console.log(newUser)
      //const user = await User.create(req.body)

      //console.log(User)
      const user = await  new User(newUser)
      .save()
      .then(user => {
        return user
      })

      //console.log(user)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  
  async login (req, res) {
    try {
      
      const {email, password} = req.body
      //console.log(email)
      const user = await User.findOne({       
          email: email       
      })
      //console.log(user);

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        });
      }
      //console.log(password)
      //console.log(user.password)

      const isPasswordValid =  bcrypt.compare(password, user.passwordassword)
      //console.log(isPasswordValid)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The password information was incorrect'
        });
      }

      const userJson = user.toJSON()
      //console.log(userJson)
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}