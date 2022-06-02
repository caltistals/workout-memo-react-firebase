import React from 'react'
import "./Topbar.css"
import HomeIcon from '@mui/icons-material/Home';
// import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { NavLink } from 'react-router-dom';
import { auth } from "../../firebase.js"

function Topbar() {


  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Workout Memo</span>
        </div>
        <div className="topbarCenter">
          <NavLink exact to = "/" className = {({isActive}) => isActive ? "is-active": "homeMenu"}>
                <HomeIcon/>ホーム
          </NavLink>
          {/* <NavLink exact to = "/records" className = {({isActive}) => isActive ? "is-active": "recordMenu"}>
                <AddAlarmIcon/> 記録
          </NavLink> */}

        </div>
        <div className="topbarRight">
          <div className="logout">
            <button className='logoutButton' onClick={() => auth.signOut()} >ログアウト</button>
          </div>
        </div>
    </div>
  )
}

export default Topbar