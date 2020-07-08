import React, {useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  obtenerPokemonesAccion,
  siguientePokemonAction,
  atrasPokemonAction,
  unPokeDetalleAction
  } 
from '../redux/pokesDucks'
//components
import Detalle from './Detalle'



function Pokemones() {
  const dispatch = useDispatch()

  const pokemones = useSelector(store => store.pokemones.results)
  const {next, previous} = useSelector(store => store.pokemones)


  useEffect(() =>{
    const fetchData = () => {
      dispatch(obtenerPokemonesAccion())
    }
    fetchData()
  },[dispatch])
  
  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Lista de pokemones</h3>
        <br/>
        <div className="d-flex justify-content-between">
          {
            next &&
            <button
              className="btn btn-dark"
              onClick={() => dispatch(siguientePokemonAction(20))}
            >
              Siguiente
            </button>
          }
          {
            previous &&
            <button
              className="btn btn-dark"
              onClick={ () => dispatch(atrasPokemonAction(20))}
            >
              Atras
            </button>
          }
        </div>
        <ul className="list-group mt-3">
          {
            pokemones.map( item => (
              <li key={item.name} className="list-group-item text-uppercase">
                {item.name}
                <button 
                  className="btn btn-dark btn-sm float-right"
                  onClick={()=> dispatch(unPokeDetalleAction(item.url)) }
                >
                  Detalle
                </button>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-md-6">
        <h3>Detalle pokemon</h3>
        <Detalle/>
      </div>
    </div>
  )
}

export default Pokemones
