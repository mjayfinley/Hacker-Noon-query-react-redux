const FRONTEND_DEV_URLS = ['https://lit-taiga-65019.herokuapp.com/' ];

const FRONTEND_PROD_URLS = [
  'https://lit-taiga-65019.herokuapp.com/',
  'https://lit-taiga-65019.herokuapp.com/'
]

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;
