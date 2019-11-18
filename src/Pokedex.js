import React from "react";
import Pokecard from "./Pokecard"
import "./Pokedex.css"

export default function Pokedex(props) {
 return (
   <div className="Pokedex">
     <h1>Total Experience: {props.exp}</h1>
     <p>{props.isWinner? "Winner" : "Loser"}</p>
     <div className="Pokedex-cards">
     {props.pokemon.map((p)=> (
      <Pokecard id= {p.id} name={p.name} type= {p.type} exp={p.base_experience} />
     ))}
     </div>
   </div>
 )

}
