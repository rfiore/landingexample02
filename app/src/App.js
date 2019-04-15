import React, { Component } from 'react';
import style from './scss/App.module.scss';

import Products from './components/Products';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
				<Header />
				<Products />
      </div>
    );
  }
}

export default App;
