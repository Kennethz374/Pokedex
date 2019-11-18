import React from "react";
import Pokedex from "./Pokedex"
export default function Pokegame(props) {
  let player1 = [];
  let player2 = [...props.pokemon];
  while(player1.length < player2.length) {
    let randomId = Math.floor(Math.random() * player2.length);
    let randomPokemon = player2.splice(randomId, 1)[0]; //return an array with single object so need to put [0]
    player1.push(randomPokemon);
  }
  return (
    <div>
      <Pokedex pokemon= {player1} />
      <Pokedex pokemon= {player2} />
    </div>
  )
}

Pokegame.defaultProps = {
  pokemon : [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'fire', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'fire', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'fire', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'fire', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'fire', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'fire', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'fire', base_experience: 65 }
  ]
}