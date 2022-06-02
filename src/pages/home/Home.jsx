import React from 'react'
import Records from '../../components/records/Records'
import SendRecord from '../../components/sendrecord/SendRecord'
import Topbar from '../../components/topbar/Topbar'

function Home() {
  return (
    <div>
        <Topbar/>
        <SendRecord/>
        <Records />
    </div>
  )
}

export default Home