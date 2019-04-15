import React, { Component } from 'react';
import style from './App.module.scss';

import Products from './components/Products'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
       <Products />
      </div>
    );
  }
}

export default App;
