import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase';
import Record from '../record/Record';
import "./Records.css"
// import {Scrollbars} from "rc-scrollbars";

function Records() {
    // ユーザーごとのドキュメント(record)を保持するstate
    const [records, setRecords] = useState([]);
    console.log("Records");
    // ログイン中のユーザーのドキュメント(record)を取得する
    useEffect(() => {
        db.collection("record")
        .where("uid", "==", auth.currentUser.uid)
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => { //onSnapshotで取得したデータのdocsの内容を一つずつ取り出す
            setRecords(snapshot.docs.map((doc) => doc.data())); //取り出した内容をrecordsにセットする
          })
    }, [])
  return (

      <div className = "rooo">
          {records.map((record) => (
              <Record record = {record} key = {record.id}/>
          ))}
      </div>

  )
}

export default Records