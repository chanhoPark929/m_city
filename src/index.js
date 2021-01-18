import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(
    <React.Fragment>
      <App user={user}/>
    </React.Fragment>,
    document.getElementById('root')
  );
})