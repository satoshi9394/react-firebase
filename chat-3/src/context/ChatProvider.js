import React, {createContext} from 'react'

export const ChatContext = createContext()

function ChatProvider({children}) {
  const saludo = 'hola desde chat'
  return (
    <ChatContext.Provider value={{saludo}}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
