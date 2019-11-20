import React from "react";
import Pokecard from "./Pokecard"
import "./Pokedex.css"

export default function Pokedex(props) {
  let title;
  if (props.isWinner) {
    title = <h1 className="Pokedex-winner">Winner</h1>;
  } else {
    title = <h1 className="Pokedex-loser">Loser</h1>;
  }

 return (
   <div className="Pokedex">
     {title}
     <h4>Total Experience: {props.exp}</h4>
     <div className="Pokedex-cards">
     {props.pokemon.map((p)=> (
      <Pokecard id= {p.id} name={p.name} type= {p.type} exp={p.base_experience} />
     ))}
     </div>
   </div>
 )

}
