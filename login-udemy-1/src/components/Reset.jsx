import React, {useState, useCallback} from 'react'
import { withRouter } from 'react-router-dom'

//firebase
import { auth } from '../firebase'


const Reset = ({history}) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const procesarDatos = (e) => {
    e.preventDefault()
    if(!email.trim()){
      setError('ingrese Email')
      return
    }
    setError(null)
    recuperar()
    
  }

  const recuperar = useCallback(async () => {
    try {
      await auth.sendPasswordResetEmail(email)
      console.log('correo enviado')
      history.push('/login')
    } catch (error) {
      setError(error.message)
    }
  },[email, history])

  return (
    <div className="mt-5">
        <h3 className="text-center">
          Reiniciar Contraseña
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
                    <button 
                        className="btn btn-lg btn-dark btn-block"
                        type="submit"
                    >
                      Reiniciar Contraseña
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
)
}

export default withRouter(Reset)
