import React, {
  createContext,
  useState,
  useEffect
} from 'react'

//firebase 
import {auth,db,provider} from '../firebase'

//contexto
export const ChatContext = createContext()

function ChatProvider({children}) {

  const dataUsuario = {uid: null, email: null, estado: null}
  const [usuario, setUsuario] =  useState(dataUsuario)

  useEffect(()=> {
    detectarUsuario()
  },[])

  const detectarUsuario = () => {
    auth.onAuthStateChanged( user => {
      if(user){
        setUsuario({uid: user.uid, email: user.email, estado: true})
      }else{
        setUsuario({uid: null, email: null, estado: false})
      }
    })
  }

  const ingresoUsuario =  async() => {
    try {
      await auth.signInWithPopup(provider)
    } catch (error) {
      console.error(error)
    }
  }

  const cerrarSesion = () => {
    auth.signOut()
  }

  return (
    <ChatContext.Provider value={
      {
        usuario, 
        ingresoUsuario, 
        cerrarSesion,
      }}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
