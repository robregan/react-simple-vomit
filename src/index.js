import React from 'react';
// so we can use react
import ReactDOM from 'react-dom';
// react dom is virtual dom lets us modify specific nodes and make changes quickly
import './index.css'; // styling
import App from './App'; //
import registerServiceWorker from './registerServiceWorker'; 
// think ^ deals with trying to prevent  loss of connectivity 


ReactDOM.render(<App />, document.getElementById('root'));
// renders our app with id of root, from index.html in our public folder
registerServiceWorker(); // fires off the function
 
