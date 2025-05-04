import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoCard } from './components/TodoCard'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

function App() {

  //creating an array of objects 
  // const todos = [
  //   {input: "hello! add your first todo!", complete: true},
  //   {input: "hello! add your second todo!", complete: false},
  //   {input: "hello! add your third todo!", complete: true},
  //   {input: "hello! add your forth todo!", complete: false}
  // ]

  const [todos, setTodos] = useState([{input: "hello! add your first todo!", complete: false}])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    //making a duplicate of todo list   
    const newTodoList = [...todos, {input: newTodo, complete: false} ]
    setTodos(newTodoList)
  }

  function handleCompleteTodo(index){
    //update, edit, modify 
    let newTodoList = [...todos] //making a duplicate array of todos
    let completedTodo = todos[index] //accessing the completed todos
    completedTodo['complete'] = true //update the status 
    newTodoList[index] = completedTodo //
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
  }

  useEffect(() => {

  },[])
  
  return (
    <>
      <Header todos = {todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}  todos = {todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo}  handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos = {todos} /> 
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
