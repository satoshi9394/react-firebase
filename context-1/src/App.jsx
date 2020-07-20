import React from 'react'

//context
import ThemeProvider from './context/ThemeProvider'
import HolaProvider from './context/HolaProvider'

//components
import Navbar from './components/Navbar';
import Principal from './components/Principal';

function App() {
  return (
    <HolaProvider>
      <ThemeProvider>
        <Navbar/>
        <Principal/>
      </ThemeProvider>
    </HolaProvider>
  );
}

export default App;
