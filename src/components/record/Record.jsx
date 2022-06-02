import React, { useState } from 'react'
import ModalEdit from '../modaledit/ModalEdit';
import "./Record.css";
import { db } from '../../firebase';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Record({record}) {
  const date = record.date.toDate();
  const dateString = date.toLocaleDateString();
  const[show, setShow] = useState(false);
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
        <ul className="recordList">
            <li className="recordListItem">{dateString} </li>
            <li className="recordListItem">種目: {record.type} </li>
            <li className="recordListItem">重量: {record.weight} kg</li>
            <li className="recordListItem">{record.sets} セット</li>
            <li className="recordListItem">{record.reps} レップ</li>
            <li className="recordListItem">
              <div className='buttons'>
                <button className="updateButton" onClick = {openModal} ><EditIcon /></button>
                <button className="deleteButton" onClick={handleDelete}><DeleteIcon/></button>
              </div>
            </li>
            {/* <li className="recordListItem"><button className="updateButton" onClick = {openModal} >編集</button></li>
            <li className="recordListItem"><button className="deleteButton" onClick={handleDelete}>削除</button></li> */}

        </ul>
        <ModalEdit show = {show} setShow ={setShow} record = {record} />
    </div>
  )
}

export default Record