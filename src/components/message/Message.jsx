import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase';
import "./Message.css";

const Message = React.memo(()  => {
    const [setCount, setSetCount] = useState(0);
    useEffect(() => {        
        db.collection("record")
        .where("uid", "==", auth.currentUser.uid)
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => { //onSnapshotで取得したデータのdocsの内容を一つずつ取り出す
            setSetCount(0);
            // setRecords(snapshot.docs.map((doc) => doc.data())); //取り出した内容をrecordsにセットする
            snapshot.docs.map((doc) => {
                const record = doc.data();
                const date = record.date.toDate();         
                const today = new Date();
                var xDay = new Date()
                xDay.setDate(today.getDate() - 7);
                if(date <= today && date >= xDay){
                    setSetCount((prevCount) => prevCount + Number(record.sets));
                }
                console.log(setCount);
            })
          })
    }, []);
  return (
    <div className='message'>
        <h4>7日間のセット数: {setCount}</h4>
        {setCount >= 40 ? <h4>よく頑張っています！😀</h4>: <h4>もう少し頑張りましょう🤔</h4>}
    </div>
  )
})

export default Message