import React from "react";
import "./Pokecard.css";
import getIdFomat from "./helper";

const Poke_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

export default function Pokecard(props) {
  let imgSrc = `${Poke_API}${getIdFomat(props.id)}.png`;
  console.log(props)
  return (
    <div className="Pokecard">
      <h1>{props.name}</h1>
      <img alt={props.name} src= {imgSrc}/>
      <div>Type: {props.type}</div>
      <div>Exp: {props.exp}</div>

    </div>
  )
}