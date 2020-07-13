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
    <div className="row mt-5">
      <div className="col-md-6">
        <h3>Lista de pokemones</h3>
        <ul className="list-group mt-4">
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
        <div className="d-flex justify-content-between mt-4">
          {
            next &&
            <button
              className="btn btn-dark"
              onClick={() => dispatch(siguientePokemonAction())}
            >
              Siguiente
            </button>
          }
          {
            previous &&
            <button
              className="btn btn-dark"
              onClick={ () => dispatch(atrasPokemonAction())}
            >
              Atras
            </button>
          }
        </div>
      </div>
      <div className="col-md-6">
        <h3>Detalle pokemon</h3>
        <Detalle/>
      </div>
    </div>
  )
}

export default Pokemones
