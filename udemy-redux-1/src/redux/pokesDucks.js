import axios from 'axios'


// constantes
const dataInicial = {
  array: [],
  offset: 0
}
//TYPES
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTES_POKEMONES_EXITO = 'SIGUIENTES_POKEMONES_EXITO'
const ATRAS_POKEMONES_EXITO = 'ATRAS_POKEMONES_EXITO'


//reducer

export default function pokeReducer(state = dataInicial, action) {
  switch(action.type){
    case 'OBTENER_POKEMONES_EXITO':
      return {...state, array: action.payload}
    case 'SIGUIENTES_POKEMONES_EXITO':
      return {...state, array: action.payload.array, offset: action.payload.offset}
    case 'ATRAS_POKEMONES_EXITO':
      return {...state, array: action.payload.array, offset: action.payload.offset}
    default:
      return state  
  }
}


//acciones
export const obtenerPokemonesAccion = () => async(dispatch, getState) => {

  const {offset} = getState().pokemones
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  try {
    const res = await axios.get(url)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error)
  }
}

export const siguientePokemonAction = (numero) => async(dispatch, getState) => {
  const {offset} = getState().pokemones
  const siguiente = offset + numero
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`
  try {
    const res = await axios.get(url)
    dispatch({
      type: SIGUIENTES_POKEMONES_EXITO,
      payload: {
        array: res.data.results,
        offset: siguiente
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export const atrasPokemonAction = (numero) => async(dispatch, getState) => {
  const {offset} = getState().pokemones
  const atras = offset - numero
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${atras}&limit=20`
  try {
    const res = await axios.get(url)
    dispatch({
      type: ATRAS_POKEMONES_EXITO,
      payload: {
        array: res.data.results,
        offset: atras
      }
    })
  } catch (error) {
    console.error(error)
  }
}