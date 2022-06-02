import React from 'react'
import firebase from "firebase/compat/app";
import {auth} from "../../firebase.js";
import "./Login.css";

function Login() {
    const signInWithGoogle = async(e) => {
        const provider = new firebase.auth.GoogleAuthProvider(); // Googleプロバイダオブジェクトのインスタンスを生成
        await auth.signInWithPopup(provider); // ポップアップでログイン
    };
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className = "loginLogo">Workout Memo</h3>
                <span className="loginDesc">ワークアウトを記録しよう</span>
            </div>
            <div className="loginRight">
                <button className="loginButton" onClick={signInWithGoogle}>グーグルでログイン</button>
            </div>
        </div>
    </div>
  )
}

export default Login