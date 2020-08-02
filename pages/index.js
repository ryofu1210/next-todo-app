import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const App = () => {

  const [todos, setTodos] = useState([]);
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    if(tmpTodo === ""){
      alert("タスクの内容が空です")
      return
    }
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  }

  const deleteTodo = (index) => {
    // const newTodos = todos.splice(index - 1, 1)
    const newTodos = todos.filter((todo, todoIndex)=>{
      return index !== todoIndex;
    })
    setTodos(newTodos)
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        onChange={e => setTmpTodo(e.target.value)}
        value={tmpTodo}
      />
      <p>{tmpTodo}</p>
      <button onClick={() => addTodo()}>Add</button>
      <ul>
        {todos.map((todo, index) => {
          return (
              <li key={todo}>
                {todo}
                <span onClick={()=> deleteTodo(index)}>x</span>
              </li>
          )
        })}
      </ul>
    </>
  )
}
export default App;