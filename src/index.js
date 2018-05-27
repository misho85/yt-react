import React from 'react';
import { render } from 'react-dom';
import Main from './app/components/Main'
import MediaCard from './app/components/MediaCard'

const App = () => (
  <div>
    <Main />
  </div>
);

render(<App />, document.getElementById('root'));
