import React from 'react'
import Message from '../../components/message/Message'
import Records from '../../components/records/Records'
import SendRecord from '../../components/sendrecord/SendRecord'
import Todo from '../../components/todolist/Todo'
import Topbar from '../../components/topbar/Topbar'

function Home() {
  return (
    <div>        
        <Topbar/>
        <SendRecord/>
        <Message />
        <Records />
    </div>
  )
}

export default Home