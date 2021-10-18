import React from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/header'
import Board from './components/board'
import './index.css';

ReactDOM.render(
  <div>
    <Header/>
    <Board/>
  </div>,
  document.getElementById('root')
);