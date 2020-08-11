import React, {useState, useEffect} from 'react'
import {db, functions} from '../firebase'

const VistaAdmin = () => {
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    fetchUsuarios()
  }, [])

  const fetchUsuarios= async () => {
    try {
      const res = await db.collection('usuarios').get()
      const arrayUsuarios = res.docs.map(doc => doc.data())
      setUsuarios(arrayUsuarios)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h3>
        Administracion de usuarios
      </h3>
      {
        usuarios.map( usuario => (
          <div key={usuario.uid}>{usuario.email} - Rol: {usuario.rol} </div>
        ))
      }
    </div>
  )
}

export default VistaAdmin
