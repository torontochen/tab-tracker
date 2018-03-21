// module.exports = (sequelize, DataTypes) => {
//   const Bookmark = sequelize.define('Bookmark', {})

//   Bookmark.associate = function (models) {
//     Bookmark.belongsTo(models.User)
//     Bookmark.belongsTo(models.Song)
//   }

//   return Bookmark
// }
const mongoose = require('mongoose')
// const {Song} = require('./Song')
// const {User} = require('./User')

const Schema = mongoose.Schema;

const Bookmark = mongoose.model('Bookmark', {
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  song: {
    type: Schema.Types.ObjectId,
    ref: 'Song'
  }
})

module.exports = {Bookmark};