import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className=' w-screen md:flex flex-col items-center justify-center font-Inter '>
    <Main/>
  </div>
);
