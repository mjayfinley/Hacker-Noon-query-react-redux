const cors = require('cors')
const bodyParser = require('body-parser')

const CORS_WHITELIST = require('./constants/frontend')

const corsOptions = {
  origin: 'https://lit-taiga-65019.herokuapp.com/',
  optionSuccessStatus: 200
}

const configureServer = app => {
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
}

module.exports = configureServer
