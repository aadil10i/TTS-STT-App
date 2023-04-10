import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './app';
// import './styles/index.css';

// const root = document.getElementById('root');
// createRoot(root).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
