import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase';
import Record from '../record/Record';
// import {Scrollbars} from "rc-scrollbars";

function Records() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        db.collection("record")
        .where("uid", "==", auth.currentUser.uid)
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => { //onSnapshotで取得したデータのdocsの内容を一つずつ取り出す
            setRecords(snapshot.docs.map((doc) => doc.data())); //取り出した内容をrecordsにセットする
          })
    }, [])
  return (

      <div className = "rcds">
          {records.map((record) => (
              <Record record = {record} key = {record.id}/>
          ))}
      </div>

  )
}

export default Records