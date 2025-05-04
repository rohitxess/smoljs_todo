
export function TodoCard(props) {
    const { todos, handleCompleteTodo , handleDeleteTodo, todoIndex } = props;
    console.log(todos)
    return (
        <div className="card todo-item">
            <p>{todos.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}