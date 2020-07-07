import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokesReducer from './pokesDucks'

const rootReducer = combineReducers({
  pokemones: pokesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generarteStore(){
  const store = createStore( rootReducer,  composeEnhancers(applyMiddleware(thunk) ))
  return store
}