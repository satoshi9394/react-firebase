import React, { createContext, useState, useEffect } from 'react'

//firebase
import {auth, db, firebase} from '../firebase.js'

//context
export const UsuarioContext = createContext()

const UsuarioProvider = ({children}) => {
  const dataUsuarioInitial = {
    email: null,
    uid: null,
    activo: null,
  }
  const [usuario, setUsuario] = useState(dataUsuarioInitial)

  const iniciarSesion = async() => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      const res = await auth.signInWithPopup(provider)
      const existe = await db.collection('usuarios').doc(res.user.email).get()
      if(!existe.exists) {
        await db.collection('usuarios').doc(res.user.email).set({
          uid: res.user.uid,
          email: res.user.email,
          rol: 'invitado'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const cerrarSesion = () => {
    auth.signOut()
  }

  useEffect(() =>{
    detectarUsuario()
  },[])

  const detectarUsuario = () => {
    auth.onAuthStateChanged(user => {
      if(user){
        console.log(user)
        user.getIdTokenResult()
          .then(idTokenResult => {
            console.info(idTokenResult)
            if(!!idTokenResult.claims.admin){
              console.info('es administrador')
              setUsuario({
                email: user.email,
                uid: user.uid,
                activo: true,
                rol: 'admin'
              })
            }else if(!!idTokenResult.claims.autor){
              console.info('es autor')
              setUsuario({
                email: user.email,
                uid: user.uid,
                activo: true,
                rol: 'autor'
              })
            }else{
              console.info('es invitado')
              setUsuario({
                email: user.email,
                uid: user.uid,
                activo: true,
                rol: 'invitado'
              })
            }
          })
      }else{
        console.error(user)
        console.info('no a iniciado seccion')
        setUsuario({
          email: null,
          uid: null,
          activo: false,
          rol: null,
        })
      }
    })
  }
  return (
    <UsuarioContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
      {children}
    </UsuarioContext.Provider>
  )
}

export default UsuarioProvider
