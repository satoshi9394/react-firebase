import React, {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext() 

const ThemeProvider = (props) => {

  const themes = {
    color: '#000',
    background: '#eee'
  }

  const [theme, setTheme] = useState(themes)

  useEffect( () => {
    if(localStorage.getItem('themaLocal')){
      const themeLocal = JSON.parse(localStorage.getItem('themaLocal'))
      setTheme(themeLocal)
    }
  }, [])
  
  const cambioColor = valor => {
    setTheme(valor)
    localStorage.setItem('themaLocal', JSON.stringify(valor))
  }
  return (
    <ThemeContext.Provider value={{theme, cambioColor}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
