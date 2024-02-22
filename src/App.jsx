
import React from 'react';
import {RandomJapaneseCarImage,RandomCarQuote}  from './RandomImage'; 
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Imágenes </h1>
      <RandomJapaneseCarImage />
      <RandomCarQuote />
    </div>
  );
};

export default App;