const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const {sequelize} = require('./models')
const config = require('./config/config')
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./passport')
require('./routes')(app)

mongoose.Promise = global.Promise
//Mongooose Connect
mongoose.connect(config.mongoURI)
  .then(()=>{
    console.log('MongoDB Connected')
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  .catch(err => console.log(err));





// sequelize.sync({force:true})
//     .then(()=>{
//       app.listen(config.port)
//       console.log(`Server started on port ${config.port}`)
//     })

