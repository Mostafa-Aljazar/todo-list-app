import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from './components/Todo';
import "./App.css"
function App() {

  let [todos, setTodos] = useState([]);
  let [todoToShow, setTodoToShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const addTodo = todo => {
    UpdateTodoToShow('all')
    if (todo.text) {
      setTodos(
        [todo, ...todos]
      )
    }
  }


  const toggleComplete = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        // suppose to update
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        return todo
      }
    }))
  }


  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }


  const UpdateTodoToShow = (action) => {
    setTodoToShow(action)
  }


  if (todoToShow == "active") {
    todos = todos.filter((todo) => {
      return (todo.complete ? null : todo)
    })
  }


  if (todoToShow == "complete") {
    todos = todos.filter((todo) => {
      return (todo.complete ? todo : null)
    })
  }


  const RemoveAllCompleteTodos = () => {
    setTodos(pre =>
      pre.filter((todo) => (!todo.complete))
    )
  }


  const ToggleAllComplete = () => {
    setTodos(pre =>
      pre.map(todo => ({
        ...todo,
        complete: toggleAllComplete,
      }
      ))
    )
    setToggleAllComplete(
      !toggleAllComplete
    )
  }


  return (

    <div className="container">

      <TodoForm onSubmit={addTodo} />
    
      {todos.map(todo => (
        <Todo
          key={todo.id} todo={todo}
          toggleComplete={() => toggleComplete(todo.id)}
          onDelete={() => handleDeleteTodo(todo.id)} />
      ))}

      <div>
        <button className="update-btn btn" onClick={() => UpdateTodoToShow("all")}>all</button>
        <button className="update-btn btn" onClick={() => UpdateTodoToShow("active")}>active</button>
        <button className="update-btn btn" onClick={() => UpdateTodoToShow("complete")}>complete</button>
      </div>

      {
        todos.some((todo) => todo.complete) &&
        <button className="all-btn btn" onClick={() => RemoveAllCompleteTodos()}>Remove all complete todos</button>
      }

      <button className=" all-btn btn" onClick={ToggleAllComplete}>Toggle all complete : {`${toggleAllComplete}`}</button>

    </div>
  )
}

export default App 