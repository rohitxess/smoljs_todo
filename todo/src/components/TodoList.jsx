import { useState } from "react"
import { TodoCard } from "./TodoCard"

export function TodoList(props) {
    const  { todos, selectedTab } = props
   
    const tab = selectedTab;

    const filterTodoList = tab === 'All' ?
        todos: 
        tab  === 'Completed'?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)
    return (
       <>
        {filterTodoList.map((todos, todoIndex) => {
            return (
                <TodoCard key={todoIndex} 
                todoIndex={todoIndex}
                {...props}
                todos={todos} />
            )
        })}
       </>
    )
}