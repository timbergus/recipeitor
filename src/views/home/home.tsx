import React from 'react';

import homeStyles from './home.css';

const Home = () => (
  <div className={homeStyles.container}>
    <div data-testid="message">
      Hello World!
    </div>
  </div>
);

export default Home;
