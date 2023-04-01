function Navbar(props){
    let pokemon = props.pokemon;
    return(
        <>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} />
        </>

    )
}

export default Navbar;