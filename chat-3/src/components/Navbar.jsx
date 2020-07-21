import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand'>
        chat
      </span>
      <div>
        <button className="btn btn-outline-success my-2">
          Acceder
        </button>
        <button className="btn btn-outline-danger my-2">
          Cerrar Sesion
        </button>
      </div>
    </nav>
  )
}

export default Navbar

