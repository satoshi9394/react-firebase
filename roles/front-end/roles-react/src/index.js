import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//contextApi
import UsuarioProvider from './context/UsuarioProvider'

ReactDOM.render(
  <React.StrictMode>
    <UsuarioProvider>
      <App/>
    </UsuarioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


