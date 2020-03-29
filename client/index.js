import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './Main.js'

ReactDOM.render(
  <div><Main/></div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);