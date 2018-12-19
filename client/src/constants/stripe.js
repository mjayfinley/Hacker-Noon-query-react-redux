const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_ayUk48WRKOawhGJrSScwMh7L';

export default STRIPE_PUBLISHABLE;
