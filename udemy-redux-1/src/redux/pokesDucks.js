import axios from 'axios'

const defaultPokemon = 'https://pokeapi.co/api/v2/pokemon/1/'


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
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'

//reducer

export default function pokeReducer(state = dataInicial, action) {
  switch(action.type){
    case 'OBTENER_POKEMONES_EXITO':
      return {...state, ...action.payload}
    case 'SIGUIENTES_POKEMONES_EXITO':
      return {...state, ...action.payload}
    case 'ATRAS_POKEMONES_EXITO':
      return {...state, ...action.payload}
    case "POKE_INFO_EXITO":
      return {...state, unPokemon: action.payload }
    default:
      return state  
  }
}


//acciones

export const unPokeDetalleAction = (url=defaultPokemon) => async(dispatch) => {
  try {
    const res = await axios.get(url)
    dispatch({
      type: POKE_INFO_EXITO,
      payload: {
        nombre: res.data.name,
        ancho: res.data.weight,
        alto: res.data.height ,
        foto: res.data.sprites.front_default
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const obtenerPokemonesAccion = () => async(dispatch) => {
  if(localStorage.getItem('offset=0')){
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem('offset=0'))
    })
    return
  }
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  try {
    const res = await axios.get(url)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data
    })
    localStorage.setItem('offset=0', JSON.stringify(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const siguientePokemonAction = () => async(dispatch, getState) => {

  const { next } = getState().pokemones

  if(localStorage.getItem(next)){
    dispatch({
      type: SIGUIENTES_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(next))
    })
    return
  }
  try {
    console.log('desde la api')
    const res = await axios.get(next)
    dispatch({
      type: SIGUIENTES_POKEMONES_EXITO,
      payload: res.data
    })
    localStorage.setItem(next, JSON.stringify(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const atrasPokemonAction = () => async(dispatch, getState) => {
  const { previous } = getState().pokemones
  if(localStorage.getItem(previous)){
    dispatch({
      type: ATRAS_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(previous))
    })
    return
  }
  try {
    console.log('desde la api')
    const res = await axios.get(previous)
    dispatch({
      type: ATRAS_POKEMONES_EXITO,
      payload: res.data
    })
    localStorage.setItem(previous, JSON.stringify(res.data))
  } catch (error) {
    console.error(error)
  }
}