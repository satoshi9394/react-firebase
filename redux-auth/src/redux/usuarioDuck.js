import {auth, firebase, db} from '../firebase'

//data inicial

const dataInicial = {
  loading: false,
  activo: false
}
//types
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USUARIO_EXITO = 'USUARIO_EXITO'
const CERRAR_SESSION = 'CERRAR_SESSION'


//reducer
export default function usuarioReducer (state=dataInicial, action) {
  switch(action.type){
    case 'LOADING': 
      return {...state, loading: true}
    case 'USUARIO_ERROR':
      return {...dataInicial}
    case 'USUARIO_EXITO':
      return {...state, loading: false, user: action.payload, activo:true}
    case 'CERRAR_SESSION':
      return{...dataInicial}
    default:
      return {...state}
  }
}

//action
export const ingresoUsuarioAction = () => async(dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider)
    console.log(res)
    const usuario = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      photoURL : res.user.photoURL
    }
    const usuarioDB = await db.collection('usuarios').doc(usuario.email).get()
    console.log(usuarioDB)
    if(usuarioDB.exists){
      //cuando existe el usuario
      dispatch({
      type: USUARIO_EXITO,
      payload: usuarioDB.data()
      })
      localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
    }else{
      //no existe el usuario en firestore
      await db.collection('usuarios').doc(usuario.email).set(usuario)
      dispatch({
      type: USUARIO_EXITO,
      payload: usuario
      })
      localStorage.setItem('usuario', JSON.stringify(usuario))
    }

  } catch (error) {
    console.log(error)
    dispatch({
      type: USUARIO_ERROR
    })
  }
}

export const leerUsuarioActivoAccion = () => (dispatch) => {
  if(localStorage.getItem('usuario')){
    dispatch({
      type: USUARIO_EXITO,
      payload: localStorage.getItem('usuario')
    })
  }
}

export const cerrarSesionAccion = () => (dispatch) => {
  auth.signOut()
  localStorage.removeItem('usuario')
  dispatch({
    type: CERRAR_SESSION,
  })
}