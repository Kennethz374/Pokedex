import React from "react";
import Pokecard from "./Pokecard"
import "./Pokedex.css"

export default function Pokedex(props) {
 return (
   <div className="Pokedex">
     <div className="Pokedex-cards">
     {props.pokemon.map((p)=> (
      <Pokecard id= {p.id} name={p.name} type= {p.type} exp={p.base_experience} />
     ))}
     </div>
   </div>
 )

}

Pokedex.defaultProps = {
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