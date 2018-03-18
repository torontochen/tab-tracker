const {
  Bookmark,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      //console.log(req.query)

      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where:where,
        include:[
          {
            model:Song
          }
        ]
      })
      .map(bookmark => bookmark.toJSON())
      .map(bookmark => _.extend(
        {},
        bookmark.Song,
        bookmark
      ))
      console.log(bookmarks)  
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
      console.log(songId)

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      console.log(bookmark)
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
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
      console.log(bookmarkId)
      const bookmark = await Bookmark.findOne({
        where:{
          id:bookmarkId,
          UserId:userId
        }
      })
      console.log(bookmark)
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}