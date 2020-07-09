import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//componentes
import Pokemones from './components/Pokemones';
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Navbar/>
          <Switch>
            <Route component={Pokemones} path="/" exact />
            <Route component={Login} path="/login" exact />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
