const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? 'sk_test_Zx323LyIrMeJs7MvoFUx4KzR'
  : 'sk_test_Zx323LyIrMeJs7MvoFUx4KzR';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
