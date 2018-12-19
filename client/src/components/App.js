import React from 'react';
import './App.css';
import Checkout from './Checkout';

import Stories from './Stories';
import SearchStories from './SearchStories';

const App = () =>
  <div className='app'>
    <div className='interactions'>
      <SearchStories />
      <div>
        <label>Donate here!  <Checkout
          name={'Donate!'}
          description={'Buy me a beer'}
          amount={1}
        /></label>
      </div>
    </div>
    <Stories />
  </div>

export default App;
