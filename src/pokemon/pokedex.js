import Navbar from "./navbar";
import Pokeinfo from "./pokemon";

function Pokedex(props){
    return( 
    <>
    <Navbar pokemon={props.pokemon}/>
    <Pokeinfo pokemon={props.pokemon}/>
    </>
    )
}

export default Pokedex;