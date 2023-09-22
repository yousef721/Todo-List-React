import { React, useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import Todo from './Components/Todo'

function App() {
  let [todos, setTodos] = useState([])
  const [todoShow, setTodoShow] = useState('all')
  const [toggleAllComplete, setToggleAllComplete] = useState(true)
  function addTodo(todo) {
    setTodos([todo, ...todos])
  }
  function handelDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  function updateTodoShow(s) {
    setTodoShow(s)
  }
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        } else {
          return todo
        }
      })
    )
  }
  function removeAllTodosThatAreComplete() {
    setTodos(todos.filter((todo) => !todo.complete))
  }
  if (todoShow === 'active') {
    todos = todos.filter((todo) => !todo.complete)
  } else if (todoShow === 'complete') {
    todos = todos.filter((todo) => todo.complete)
  }
  return (
    <div className="container">
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => handelDelete(todo.id)}
          toggleComplete={() => toggleComplete(todo.id)}
        />
      ))}
      <div>
        <button
          className="update-btn btn"
          onClick={() => updateTodoShow('all')}>
          All
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoShow('active')}>
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoShow('complete')}>
          Complete
        </button>
      </div>
      {todos.some((todo) => todo.complete) ? (
        <button className="all-btn btn" onClick={removeAllTodosThatAreComplete}>
          Remove All Complete
        </button>
      ) : null}
      <button
        className="all-btn btn"
        onClick={() => {
          setTodos(
            todos.map((todo) => ({
              ...todo,
              complete: toggleAllComplete,
            }))
          )
          setToggleAllComplete(!toggleAllComplete)
        }}>
        Toggle All Complete : {`${toggleAllComplete}`}
      </button>
    </div>
  )
}

export default App
