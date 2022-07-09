import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react'
function Todo() {
    const todoText = useRef();
    const getTodos = () => {
      if(localStorage.getItem("todoArray") === null){
        return [];
      }else {
        return JSON.parse(localStorage.getItem("todoArray"));
      }
    }
    const [todos, setTodos] = useState([...getTodos()]);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...todos, todoText.current.value];
        let json = JSON.stringify(newTodos, undefined, 1);
        localStorage.setItem("todoArray", json);
        setTodos(newTodos);
      };

    const onClickComplete = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      let json = JSON.stringify(newTodos, undefined, 1);
      localStorage.setItem("todoArray", json);
      setTodos(newTodos);
    };

  return (
    <>
      <div className="input-area">
        <input
          className = "todoInput"
          placeholder="TODOを入力"
          ref = {todoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="todos">
        <ul>
          {todos.map((todo, index) => {
            return (
              // ループで要素を表示させる場合はキーの設定を忘れない
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数を渡したいときはアロー関数を使う */}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  )
}

export default Todo

