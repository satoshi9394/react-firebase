import React, {useContext, useRef, useEffect} from 'react'
import Agregar from './Agregar'

import {ChatContext} from '../context/ChatProvider'

const Chat = () => {
  const {mensajes, usuario} = useContext(ChatContext)
  const refZoneChat = useRef(null)

  useEffect( () => {
    console.log(refZoneChat)
    refZoneChat.current.scrollTop = refZoneChat.current.scrollHeight
  },[mensajes])

  return (
    <div 
      className='mt-3 px-2 mb-5'
      style={{height:'72vh', overflowY: 'scroll'}}
      ref={refZoneChat}
    >
      {
        mensajes.map((item, index) => (
          usuario.uid === item.uid ? (
            <div className='d-flex justify-content-end mb-2' key={index}>
              <span className='badge badge-pill badge-primary'>
                {item.texto}
              </span>
            </div>
          ) : (
            <div className='d-flex justify-content-start mb-2' key={index}>
              <span className='badge badge-pill badge-secondary'>
                {item.texto}
              </span>
            </div>
          )
        ))
      }
      <Agregar/>
    </div>
  )
}

export default Chat
