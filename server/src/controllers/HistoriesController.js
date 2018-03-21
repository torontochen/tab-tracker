const {
  History  
} = require('../models/History')
const {Song} = require('../models/Song')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.find(
        
          {user: userId},
        //   {sort:{
        //     date_reviewed: -1 //Sort by Date Added DESC
        // }}
        
        // include: [
        //   {
        //     model: Song
        //   }
        // ],
        // order: [
        //   ['createdAt', 'DESC']
        // ]
      )
      .sort({
             date_reviewed: -1 //Sort by Date Added DESC
         })
      .populate('song')
        // .map(history => history.toJSON())
        // .map(history => _.extend(
        //   {},
        //   history.Song,
        //   history
        // ))
        console.log(histories)
      res.send(_.uniqBy(histories, history => history.song))
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the history'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
      const history = await History.create({
        song: songId,
        user: userId
      })
      res.send(history)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the history object'
      })
    }
  }
}