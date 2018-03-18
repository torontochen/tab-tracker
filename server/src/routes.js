const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsContorller = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register);

  app.post('/login',
  AuthenticationController.login)

  app.get('/songs',SongsContorller.index)
  app.get('/songs/:songId',SongsContorller.show)
  app.put('/songs/:songId', SongsContorller.put)
  app.post('/songs',SongsContorller.post)

  app.get('/bookmarks',
  isAuthenticated,
  BookmarksController.index)
  
  app.post('/bookmarks',
  isAuthenticated,
  BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId',
  isAuthenticated,
  BookmarksController.delete)

  app.get('/histories',
  isAuthenticated,
  HistoriesController.index)

app.post('/histories',
isAuthenticated,
  HistoriesController.post)
}