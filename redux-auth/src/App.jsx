import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//componentes
import Pokemones from './components/Pokemones';
import Login from './components/Login';
import Navbar from './components/Navbar';

// Firebase
import {auth} from './firebase'


function App() {

  // Firebase
  const [firebaseUser, setFirebaseUser] = useState(false)

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
          console.log(user)
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
    } 
    fetchUser()
}, [])

  const RutaPrivada = ({component, path, ...rest}) => {
    if(localStorage.getItem('usuario')){
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      if(usuarioStorage.uid === firebaseUser.uid){
        return <Route component={component} path={path} {...rest}/>
      }else{
        console.log('no exite')
        return <Redirect to="/login" {...rest} />
      }
    }else{
      console.log('no exite')
      return <Redirect to="/login" {...rest} />
    }
  }


  return firebaseUser !== false ? (
    <Router>
      <div className="container mt-3">
        <Navbar/>
          <Switch>
            <RutaPrivada component={Pokemones} path="/" exact />
            <Route component={Login} path="/login" exact />
          </Switch>
      </div>
    </Router>
  ) : 
  (
    <div>Cargando...</div>
  )
}

export default App;
