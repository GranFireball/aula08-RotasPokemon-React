import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Pokemons from './pokemon/pokemons';
import ListPokemons from './pokemon/listpokemons';
function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
      <Route path='/pokemon'>
        <Route index element={<ListPokemons/>}/>
        <Route path=':pokemonId' element={<Pokemons/>}/>
      </Route>
    </Routes>
  );
}

export default App;
