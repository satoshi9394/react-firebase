import axios from 'axios'


// constantes
const dataInicial = {
  count: 0,
  next: null,
  previous:null,
  results: []

}
//TYPES
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTES_POKEMONES_EXITO = 'SIGUIENTES_POKEMONES_EXITO'
const ATRAS_POKEMONES_EXITO = 'ATRAS_POKEMONES_EXITO'


//reducer

export default function pokeReducer(state = dataInicial, action) {
  switch(action.type){
    case 'OBTENER_POKEMONES_EXITO':
      return {...state, ...action.payload}
    case 'SIGUIENTES_POKEMONES_EXITO':
      return {...state, ...action.payload}
    case 'ATRAS_POKEMONES_EXITO':
      return {...state, ...action.payload}
    default:
      return state  
  }
}


//acciones
export const obtenerPokemonesAccion = () => async(dispatch, getState) => {

  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  try {
    const res = await axios.get(url)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const siguientePokemonAction = () => async(dispatch, getState) => {

  const { next } = getState().pokemones
  try {
    const res = await axios.get(next)
    dispatch({
      type: SIGUIENTES_POKEMONES_EXITO,
      payload: res.data
    })
  } catch (error) {
    console.error(error)
  }
}

export const atrasPokemonAction = () => async(dispatch, getState) => {
  const { previous } = getState().pokemones
  try {
    const res = await axios.get(previous)
    dispatch({
      type: ATRAS_POKEMONES_EXITO,
      payload: res.data
    })
  } catch (error) {
    console.error(error)
  }
}