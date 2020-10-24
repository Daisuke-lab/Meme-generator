import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//render( what I want to  render(request),  where I wnat to render it )
// html in javascript is called JSX
// this JSX is supposed to be put in <div id='root></div>
ReactDOM.render(
  //if any bugs appear, try React.strictmode
  //I quit strictmode because it calls functions twice and it is annoying
  <React.Suspense>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
