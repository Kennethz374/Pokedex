import React from "react";
import "./Pokecard.css";
import getIdFomat from "./helper";

const Poke_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

export default function Pokecard(props) {
  let imgSrc = `${Poke_API}${getIdFomat(props.id)}.png`;
  console.log(props)
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{props.name}</h1>
      <div className="Pokecare-image">
      <img alt={props.name} src= {imgSrc}/>
      </div>
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">Exp: {props.exp}</div>

    </div>
  )
}