const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://myapidomain.com'
  : 'https://lit-taiga-65019.herokuapp.com/';

export default PAYMENT_SERVER_URL;
