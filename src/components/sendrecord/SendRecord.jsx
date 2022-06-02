import React, { useRef } from 'react'
import { db , auth} from '../../firebase';
import firebase from 'firebase/compat/app';
import "./SendRecord.css";

function SendRecord() {
    // 各inputのvalueへのuseRef
    const date = useRef();
    const type = useRef();
    const weight = useRef();
    const sets = useRef();
    const reps = useRef();
    
    // ドキュメントを作成して送信
    const handleSubmit = async (e) => {
        const uid = auth.currentUser.uid;
        const collection = db.collection("record");
        // 事前にドキュメントのidを取得(作成)
        const newDocId = collection.doc().id;
        e.preventDefault();
        // フォームの値をnewDocIdのドキュメントに追加する
        await  collection.doc(newDocId).set({
            uid,
            date: firebase.firestore.Timestamp.fromDate(new Date(date.current.value)), //FirestoreのTimestampに変換する
            type: type.current.value,
            weight: weight.current.value, 
            sets: sets.current.value,
            reps: reps.current.value,
            id: newDocId,
        });

        // 各フォームの値をリセットする
        date.current.value = "";
        type.current.value = "";
        weight.current.value = "";
        sets.current.value = "";
        reps.current.value = "";
    }

  return (
    <div className="sendRecord">
        <h1>ワークアウトを記録</h1>
        <form className="sendRecordWrapper" onSubmit={(e) => handleSubmit(e)}>
            <input type="date" className="dateInput" required ref = {date} />
            <input type="text" className="typeInput" required ref = {type} placeholder="種目"  />
            <input type="number" className="weightInput" required ref = {weight}  placeholder="重量(kg)" />
            <input type="number" className="setsInput" required ref = {sets} placeholder="セット数"/>
            <input type="number" className="repsInput" required ref = {reps} placeholder="レップ数" />
            <button className="sendButton" type = "submit">記録</button>
        </form>
    </div>
  )
}

export default SendRecord