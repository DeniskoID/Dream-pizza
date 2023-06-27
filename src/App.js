// eslint-disable-next-line no-unused-vars
import React from 'react';

// import pizzas from './assets/pizzas.json';

import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
