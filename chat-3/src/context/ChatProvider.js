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

  return (
    <ChatContext.Provider value={{usuario}}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
