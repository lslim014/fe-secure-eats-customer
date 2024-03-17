import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageRoute from './routes/PageRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <PageRoute />
    </BrowserRouter>
  );
}

export default App;
