import React, {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {unPokeDetalleAction} from '../redux/pokesDucks'

function Detalle() {

  const dispatch = useDispatch()
  useEffect(() =>{
    const fetchData = () => {
      dispatch(unPokeDetalleAction())
    }
    fetchData()
  },[dispatch])

  const pokemon = useSelector(store => store.pokemones.unPokemon)
  return pokemon ? (
    <div className="card mt-4 text-center">
      <div className="card-body">
        <img src={pokemon.foto} className="img-fluid" alt="Imagen pokemon"/>
        <div className="card-title text-uppercase">
          {pokemon.nombre}
        </div>
        <p className="card-text">
          Alto: {pokemon.alto} |
          Ancho: {pokemon.ancho}
        </p>
      </div>
    </div>
  ) : null
}

export default Detalle
