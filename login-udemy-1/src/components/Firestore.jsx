import React, {useState}  from 'react';
import moment from 'moment'
import 'moment/locale/es'

import { db } from '../firebase'

function Firestore({user}) {
  const [ tareas, setTareas ] = useState([])
  const [ tarea, setTarea ] = useState('') 
  const [ modoEdition, setModoEdition ] = useState(false)
  const [ id, setId ] = useState('') 
  const [ultimo, setUltimo] = useState(null)
  const [desactivar, setDesactivar] = useState(null)

  React.useEffect( () => {
    const obtenerDatos = async () => {
      try {
        setDesactivar(true)
        const data = await db.collection(user.uid)
          .limit(2)
          .orderBy('fecha','desc')
          .get()
        const arrayData = data.docs.map( doc => ({ id: doc.id, ...doc.data() }) )

        setUltimo(data.docs[data.docs.length - 1 ])
        console.log(arrayData)
        setTareas(arrayData)

        const query = await db.collection(user.uid)
        .limit(2)
        .orderBy('fecha','desc')
        .startAfter(data.docs[data.docs.length - 1 ])
        .get()
        if(query.empty){
          console.log('no hay mas documentos')
          setDesactivar(true)
        }else{
          setDesactivar(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    obtenerDatos()
  }, [user.uid])

  const siguiente = async() => {
    console.log('siguiente')
    try {
      const data = await db.collection(user.uid)
          .limit(2)
          .orderBy('fecha','desc')
          .startAfter(ultimo)
          .get()
      const arrayData = data.docs.map( doc => ({ id: doc.id, ...doc.data() }) )
      setTareas([
        ...tareas,
        ...arrayData
      ])
      setUltimo(data.docs[data.docs.length - 1 ])

      const query = await db.collection(user.uid)
        .limit(2)
        .orderBy('fecha','desc')
        .startAfter(data.docs[data.docs.length - 1 ])
        .get()
        if(query.empty){
          console.log('no hay mas documentos')
          setDesactivar(true)
        }else{
          setDesactivar(false)
        }
    } catch (error) {
      console.error(error)
    }

  }

  const agregar =  async (e) => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('esta vacio')
      return
    }
    try {
      const nuevaTarea = { 
        name: tarea,
        fecha: Date.now()
      }
      const data = await db.collection(user.uid).add(nuevaTarea)
      setTareas([
        ...tareas,
        {...nuevaTarea, id: data.id}
      ])
      setTarea('')
    } catch (error) {
      console.log(error)
    }
    console.log(tarea)
  }
  const eliminar = async (id) => {
    try {
      
      await db.collection(user.uid).doc(id).delete()
      const arrayFiltrado = tareas.filter( item => item.id !== id)
      setTareas(arrayFiltrado)

    } catch (error) {
      console.error(error)
    }
  }

  const activarEdicion = (item) => {
    setModoEdition(true)
    setTarea(item.name)
    setId(item.id)
  }

  const editar =  async (e) => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('esta vacio')
      return
    }
    try {
      await db.collection(user.uid).doc(id).update({
        name: tarea
      })
      const arrayEditado = tareas.map( item => (
        item.id === id ? {id: item.id, fecha: item.fecha, name: tarea} : item
      ))
      setTareas(arrayEditado)
      setModoEdition(false)
      setTarea('')
      setId('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  {item.name} - {moment(item.fecha).format('lll')}
                  <button 
                    className="btn btn-danger btn-sm float-right"
                    onClick={ () => eliminar(item.id)}
                  >
                    Eliminar
                  </button>
                  <button 
                    className="btn btn-warning btn-sm float-right mr-2"
                    onClick={ () => activarEdicion(item)}
                  >
                    Editar
                  </button>
                </li>
              ))
            }
          </ul>
          <button 
          className="btn btn-info btn-block mt-2 btn-sm"
          onClick={()=> siguiente()}
          disabled={desactivar}
          >
            Siguiente...
          </button>
        </div>
        <div className="col-md-6">
          <h3>
            {modoEdition ? 'Editar tarea': 'Agregar Tarea'}
          </h3>
          <form onSubmit={modoEdition ? editar : agregar}>
            <input
              type="text"
              placeholder="Ingrese tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <button 
            className={
              modoEdition ? 'btn btn-warning btn-block' : 'btn btn-dark btn-block'
            }
            type="submit"
            >
              {
                modoEdition ? 'Editar' : 'Agregar'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Firestore;

