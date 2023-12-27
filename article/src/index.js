import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Article from './components/Article';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Article />
    <Article align={true}/>
  </React.StrictMode>
);


