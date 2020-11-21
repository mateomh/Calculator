import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import NavBar from './components/navbar';
import './styles/general-styles.css';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
