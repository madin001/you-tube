import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from '../src/Context/ModalProvider'
import {ThemeProvider} from '../src/Context/ThemeProvider'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

