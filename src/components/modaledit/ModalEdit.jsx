import React, { useRef } from 'react'
import "./ModalEdit.css";
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';

function ModalEdit({show, setShow, record}) {
    // 各inputのvalueへのuseRef
    const date = useRef();
    const type = useRef();
    const weight = useRef();
    const sets = useRef();
    const reps = useRef();

    // recordの持つ日付をフォーマット
    const dateObj = record.date.toDate();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    // numをdigit桁に変換する
    const toTwoDigits = (num, digit) => {
        num += "";
        if(num.length < digit) {
            num = "0" + num;
        }
        return num
    }
    const formatDate = toTwoDigits(year, 4) + "-" + toTwoDigits(month, 2) + "-" + toTwoDigits(day, 2);

    // モーダル編集ウィンドウを閉じる
    const closeModal = () => {
        setShow(false);
    }

    // 更新ボタンを押した時に呼び出される
    const handleSubmit = async (e) => {
        e.preventDefault();

        // ドキュメントを更新
        await  db.collection("record").doc(record.id).update({
            date: firebase.firestore.Timestamp.fromDate(new Date(date.current.value)),
            type: type.current.value,
            weight: weight.current.value, 
            sets: sets.current.value,
            reps: reps.current.value,
        });
        // モーダルを閉じる
        closeModal();
    }

    


  if(show) {
      return (
        <div id = "overlay" onClick = {closeModal} >
            <div id="content" onClick={(e) => e.stopPropagation()} >
                <h1 className="editTitle">編集する</h1>
                <form className="editRecordWrapper" onSubmit={(e) => handleSubmit(e)}>
                    <input type="date" className="dateInput" required ref = {date} defaultValue = {formatDate}/>
                    <input type="text" className="typeInput" required ref = {type} placeholder="種目" defaultValue= {record.type} />
                    <input type="number" className="weightInput" required ref = {weight}  placeholder="重量(kg)" defaultValue = {record.weight} /><span> kg </span>
                    <input type="number" className="setsInput" required ref = {sets} placeholder="セット数" defaultValue = {record.sets}/><span> sets </span>
                    <input type="number" className="repsInput" required ref = {reps} placeholder="レップ数" defaultValue = {record.reps} /><span> reps</span>
                    <button className="sendUpdateButton" type = "submit" >更新</button>
                </form>
            </div>
        </div>
      );
  } else {
      return null;
  }
}

export default ModalEdit