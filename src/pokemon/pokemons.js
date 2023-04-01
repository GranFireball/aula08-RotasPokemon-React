import React from 'react';
import { useParams } from 'react-router-dom';
import Pokedex from './pokedex';


export default function Pokemons() {
  const [pokemon, setPokemon] = React.useState({});
  const {pokemonId} = useParams();
  React.useEffect(() => {
    Carregar();
  }, [pokemonId]);


  function Carregar() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }
  if(pokemon.name){
    return (
      <div>
        <Pokedex pokemon={pokemon}/> 
      </div>
    )
  }
  
  else{
    return(
    <button>carregar</button>
    )
    
  }
  
}