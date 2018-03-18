// module.exports = (sequelize, DataTypes) => {
//   const Song = sequelize.define('Song', {
//     title: DataTypes.STRING,
//     artist: DataTypes.STRING,
//     genre: DataTypes.STRING,
//     album: DataTypes.STRING,
//     albumImageUrl: DataTypes.STRING,
//     youtubeId: DataTypes.STRING,
//     lyrics: DataTypes.TEXT,
//     tab: DataTypes.TEXT
//   }) 

//   return Song
// }

const mongoose = require('mongoose')

const Song = mongoose.model('Song', {
  title: {
    type: String,
    
   
    trim: true
  },
  artist: {
    type: String,
   
    trim: true
  },
  genre: {
    type: String,
    
    trim: true
  },
  album: {
    type: String,
    
    trim: true
  },
  albumImageUrl: {
    type: String,
   
    trim: true
  },
  youtubeId: {
    type: String,
    
    trim: true
  },
  lyrics: {
    type: String,
    
    trim: true
  },
  tab: {
    type: String,
    
    trim: true
  },

  })

module.exports = {Song};