import React from 'react';
import Pokecard from "./Pokecard"
import './App.css';

function App() {
  return (
    <>
      <Pokecard
      id={4}
      name="Charmander"
      type="fire"
      exp="62"
      />
    </>
  );
}

export default App;
