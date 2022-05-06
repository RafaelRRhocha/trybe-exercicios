import './App.css'
import { Pokemon } from './Pokemons'
import { pokemons } from './Data'

function App() {
  return (
    pokemons.map(poke => <Pokemon pokemon={poke}/>)
  )
}

export default App
