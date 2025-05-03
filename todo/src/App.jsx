import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoCard } from './components/TodoCard'
import { TodoList } from './components/TodoList'

function App() {
  //creating an array of objects 
  const todos = [
    {input: "hello! add your first todo!", complete: true},
    {input: "hello! add your second todo!", complete: false},
    {input: "hello! add your second todo!", complete: true},
    {input: "hello! add your third todo!", complete: false}]

  return (
    <>
      <Header todos = {todos} />
      <Tabs todos = {todos}/>
      <TodoList todos = {todos} /> 
      <TodoCard todos = {todos}/>
    </>
  )
}

export default App
