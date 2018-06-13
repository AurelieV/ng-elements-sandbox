import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';


window.loginAPI = {
  render: (element) => ReactDOM.render(<App />, element)
}


//registerServiceWorker();
