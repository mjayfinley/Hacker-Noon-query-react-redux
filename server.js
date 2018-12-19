const cors = require('cors')
const bodyParser = require('body-parser')

const CORS_WHITELIST = require('./constants/frontend')

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200
}

const configureServer = app => {
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
}

module.exports = configureServer
