const Promise = require('bluebird')
//const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// function hashPassword (user, options) {
//   const SALT_FACTOR = 8

//   if (!user.changed('password')) {
//     return
//   }

//   return bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     .then(hash => {
//       user.setDataValue('password', hash)
//     })
// }

const UserSchema = new mongoose.Schema({
      email: {
      type: String,
      unique: true,
      required: true,
      trim: true
      },
      password:{
      type:String,
      required:true
    } 
  })

  // User.prototype.comparePassword = function (password) {

  //   //console.log(bcrypt.hashAsync(password, salt, null))

  //   return bcrypt.compareAsync(password, this.password)
  // }

  // User.associate = function (models) {
  // }



UserSchema.pre('save', function (next) {
  const user = this

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash
        next();
      })
    })
  } else {
    next()
  }
})

const User = mongoose.model('User', UserSchema)

UserSchema.methods.comparePassword = function (password,hashedPassword) {

  //console.log(bcrypt.hashAsync(password, salt, null))
  console.log(password)
  console.log(hashedpassword)
  console.log(bcrypt.compare(password, hashedPassword))

  return bcrypt.compare(password, hashedPassword)
}

module.exports = {User}