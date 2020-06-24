import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//components
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            home...
          </Route>
          <Route path="/login">
            login...
          </Route>
          <Route path="/admin">
            admin...
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
