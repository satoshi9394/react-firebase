import React from 'react';
import {Provider} from 'react-redux'

import generarteStore from './redux/store.js'

//componentes
import Pokemones from './components/Pokemones';

function App() {

  const store = generarteStore()

  return (
    <Provider store={store}>
      <div className="container mt-3">
        <Pokemones/>
      </div>
    </Provider>
  );
}

export default App;
