
export function Tabs(props) {
    // array destructuring to get the values of todos 

    const  { todos } = props;
    
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className="tab-container">
           {tabs.map((tab, tabIndex) => {
                const numberofTasks = tabs === 'All' ? 
                todos.length : tab === 'Open' ?
                    todos.filter(val => !val.complete).length :
                    todos.filter(val => val.complete).length

            return (
                <button className="tab-button">
                    <h4>{tab} <span>{numberofTasks}</span></h4>
                </button>
            )
           }) }
        </nav>
    )
}