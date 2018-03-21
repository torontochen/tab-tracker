const {Song} = require('../models/Song')

module.exports = {
  async index (req, res) {
    //console.log(req.query.search)
    try {
      //const songs = null
      const search = req.query.search
     if (req.query.search){
     // console.log(search)
      //console.log(`/.*${search}.*/i`)
      const query = ".*" + search + ".*"
      const queryReg = new RegExp (query,'i')
     // console.log(queryReg)
      const  songs = await Song.find({            
                $or:[
                    {title: queryReg},
                    {artist: queryReg},
                    {genre: queryReg},
                    {album: queryReg}              
                    ]
            })
            res.send(songs)
           // console.log(songs)
     } else {
      const songs = await Song.find({
        limit:10
      })
      res.send(songs)
     }
     //console.log(songs)
     
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fecth the songs'
      })
    }
  },
  async show (req, res) {
    try {
     const song = await Song.findById(req.params.songId)
     res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fecth the song'
      })
    }
  },
  async post (req, res) {
    try {
      const newSong =  {
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        album: req.body.album,
        albumImageUrl: req.body.albumImageUrl,
        youtubeId: req.body.youtubeId,
        lyrics: req.body.lyrics,
        tab: req.body.tab
      }
     // console.log(newSong)
      //const user = await User.create(req.body)

      //console.log(User)
      const song = await  new Song(newSong)
      .save()
      .then(song => {
        return song
      })


     //const song = await Song.create(req.body)
     res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  },
  
  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
  
}