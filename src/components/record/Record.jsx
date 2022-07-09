import React, { useState } from 'react'
import ModalEdit from '../modaledit/ModalEdit';
import "./Record.css";
import { db } from '../../firebase';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Record = React.memo(({record}) => {
  // ドキュメント(record)の日付を変換
  const date = record.date.toDate();
  const dateString = date.toLocaleDateString();

  // モーダルウィンドウの表示/非表示を決定するstate
  const[show, setShow] = useState(false);
  
  // モーダルウィンドウを開く
  const openModal = () => {
    setShow(true);
  };

  // 削除ボタンを押したときに呼び出される
  const handleDelete = async (e) => {
    e.preventDefault();

    // ドキュメントを削除
    await  db.collection("record").doc(record.id).delete();
  }

  return (
    <div className = "recordWrapper">
        <div className='dateAndType'>
          <span className='dateString'>{dateString}</span>
          <span className="recordType">{record.type}</span>
        </div>
        <div className="detail">
          <span>{record.weight} kg</span>
          <span>{record.sets} set</span>
          <span>{record.reps} rep</span>
        </div>
        <div className='buttons'>
            <button className="updateButton" onClick = {openModal} ><EditIcon style ={{fontSize:"16px"}}/></button>
            <button className="deleteButton" onClick={handleDelete}><DeleteIcon style ={{fontSize:"16px"}}/></button>
        </div>
        <ModalEdit show = {show} setShow ={setShow} record = {record} />
    </div>
  )
})

export default Record