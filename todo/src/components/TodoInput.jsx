import { useState } from "react"


export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return (
        <div className="input-container">
            <input value= {inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} type="text" placeholder="Add task"/>
            <button onClick={(e) => {
                if(!inputValue){
                    return
                }

               handleAddTodo(inputValue)
               setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}