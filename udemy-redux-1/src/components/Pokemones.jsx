import React  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  obtenerPokemonesAccion,
  siguientePokemonAction,
  atrasPokemonAction
  } 
from '../redux/pokesDucks'



function Pokemones() {
  const dispatch = useDispatch()

  const pokemones = useSelector(store => store.pokemones.results)
  const offset = useSelector( store => store.pokemones.offset)
  
  return (
    <div>
      lista de pokemones
      <button
        onClick={() => dispatch(obtenerPokemonesAccion())}
      >
        Get pokemones
      </button>
      <button
        type='none'
        onClick={ () => dispatch(atrasPokemonAction(20))}
      >
        Atras
      </button>
      <button
        onClick={() => dispatch(siguientePokemonAction(20))}
      >
        Siguiente
      </button>
      <ul>
        {
          pokemones.map( item => (
            <li key={item.name}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pokemones
