import React, { useState, useCallback} from 'react'
import { withRouter } from 'react-router-dom'

import { auth, db }  from '../firebase'


const Login = (props) => {

  const [email, setEmail] = useState('')
  const [pass, setPass ] = useState('')
  const [error, setError] = useState(null)
  const [ esRegistro, setEsRegistro ] = useState(true)
  
  const procesarDatos = (e) => {
    e.preventDefault()
    if(!email.trim()){
      setError('ingrese Email')
      return
    }
    if(!pass.trim()){
      setError('ingrese Password')
      return
    }
    if(pass.length < 6){
      setError('Tu contrasena debe ser mayor a 6 caracters')
      return
    }
    setError(null)
    console.log('pasamos todas las validaciones')

    if(esRegistro){
      registrar()
    }else{
      login()
    }


  }

  const login = useCallback( async() => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass)
      console.log(res.user)
      setEmail('')
      setPass('')
      setError(null)
      props.history.push('/admin')
    } catch (error) {
      console.error(error)
      if(error.code === 'auth/invalid-email'){
        setError('Email no valido...')
      }
      if(error.code === 'auth/user-not-found'){
        setError('Email no registrado...')
      }
      if(error.code === 'auth/wrong-password'){
        setError('Email o password no valido...')
      }
    }
  },[email, pass, props.history])

  const registrar = useCallback( async() => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email,pass)
      await db.collection('usuarios').doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid
      })
      setEmail('')
      setPass('')
      setError(null)
      console.info(res.user)
      props.history.push('/admin')
    } catch (error) {
      console.error(error)
      if(error.code === 'auth/invalid-email'){
        setError('Email no valido')
      }
      if(error.code === 'auth/email-already-in-use'){
        setError('Email ya registrado')
      }
      
    }

  }, [email, pass, props.history])


    return (
        <div className="mt-5">
            <h3 className="text-center">
              {
                esRegistro ? 'Registro de usuarios' : 'Login de acceso'
              }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                          error && (
                            <div className="alert alert-danger">
                              {error}
                            </div>
                          )
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange={ e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                            onChange={ e => setPass(e.target.value)}
                            value={pass}
                        />
                        <button 
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                        >
                            {
                              esRegistro ? 'Registrate' : 'Ingresa'
                            }
                        </button>
                        <button 
                            className="btn btn-sm btn-info btn-block"
                            type="button"
                            onClick={ () => setEsRegistro(!esRegistro)}
                        >
                            {
                              esRegistro ? 'Ya estas registrado?' : 'no tienes cuenta?'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)