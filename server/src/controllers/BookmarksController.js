const {
  Bookmark  
} = require('../models/Bookmark')
const {Song} = require('../models/Song')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      
       const userId = req.user.id
       const {songId} = req.query
      // console.log(req.query)
      // console.log('userId is'+userId)
      // console.log(req.query)
       const where = {
       user: userId
       }
       if (songId) {
         where.song = songId
       }
      //  console.log(where)
      const bookmarks = await Bookmark.find(
        // where:where,
        // include:[
        //   {
        //     model:Song
        //   }
        // ]
         where
         //{ user: '5aac18ac8a838923d8a23362' }
      )
       .populate('song')
      // .map(bookmark => bookmark.toJSON())
      //   .map(bookmark => _.assignIn(
      //     {},
      //       bookmark.song,
      // //    bookmark
      //  ))
    //  console.log(bookmarks)  
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },

  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
      console.log(userId)
      console.log(req.body)

      const bookmark = await Bookmark.findOne({
         
          song: songId,
          user: userId
        
      })
      //console.log(bookmark)
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await new Bookmark({
        song: songId,
        user: userId
      }).save().then(bookmark => {
        return bookmark
      })
      res.send(newBookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the bookmark'
      })
    }
  },

  async delete (req, res) {
    try {
      const userId = req.user.id
      const {bookmarkId} = req.params
      // console.log(bookmarkId)
      const bookmark = await Bookmark.findOne({
        
          _id:bookmarkId,
          user:userId
        
      })
      // console.log(bookmark)
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
      await bookmark.remove()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}