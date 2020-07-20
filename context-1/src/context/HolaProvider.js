import React, {createContext} from 'react'

export const HolaContext = createContext()

const HolaProvider = (props) => {
  const hola = 'Hola desde Global'
  return (
    <HolaContext.Provider value={{hola}}>
      {props.children}
    </HolaContext.Provider>
  )
}

export default HolaProvider
