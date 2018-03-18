const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  mongoURI:'mongodb://billchen:chen0417@ds215388.mlab.com:15388/tabtrack',
  // db:{
  //   database:process.env.DB_NAME || 'tabtracker',
  //   user: process.env.DB_USER || 'tabtracker',
  //   password: process.env.DB_PASSWORD || 'tabtracker',
  //   options:{
  //     dialect: process.env.DIALECT || 'sqlite',
  //     host: process.env.HOST || 'localhost',
  //     storage: path.resolve(__dirname,'../../tabtracker.sqlite')
  //   }
  // },
  authentication:{
    jwtSecret:process.env.JWT_SECRET || 'secret'
  }
}