// module.exports = (sequelize, DataTypes) => {
//   const History = sequelize.define('History', {})

//   History.associate = function (models) {
//     History.belongsTo(models.User)
//     History.belongsTo(models.Song)
//   }

//   return History
// }

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const History = mongoose.model('History', {
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  song: {
    type: Schema.Types.ObjectId,
    ref: 'Song'
  },
  date_reviewed:{
    type:Date,
    default:Date.now()
  }
})

module.exports = {History};