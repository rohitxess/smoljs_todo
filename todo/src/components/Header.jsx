
export function Header (props) {
    //array destructuring 
    const { todos } = props;
    
    const todosLength = todos.length;
    const isTasksPlural = todos.length !== 1
    const taskOrTasks = isTasksPlural? 'Tasks' : 'Task'

    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}</h1>
        </header>
    )
}