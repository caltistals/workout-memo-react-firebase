import React from 'react'
import Records from '../../components/records/Records'
import SendRecord from '../../components/sendrecord/SendRecord'
import Topbar from '../../components/topbar/Topbar'

function RecordsPage() {
  return (
    <div>
        <Topbar/>
        <SendRecord/>
        <Records />
        RecordsPage
    </div>
  )
}

export default RecordsPage