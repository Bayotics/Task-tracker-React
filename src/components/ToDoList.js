import "../App.css"
const ToDoList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((e) => e.id !== id))
    }
    const handleComplete = (e) => {
        setTodos(
            todos.map((f) => {
                if (f.id === e.id) {
                    return { ...e, completed: !e.completed }
                }
                return f
            })
        )
    }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((e) => e.id === id);
        setEditTodo(findTodo);
    }
    return (
        <div>
            {todos.map((e) => {
                return (
                    <li>
                        <h3
                            onChange={(e) => e.preventDefault()}
                            className={`list ${e.completed ? "complete" : ""}`}
                        > {e.title}</h3>
                        <div>
                            <button onClick={() => handleDelete(e)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                            <button onClick={() => handleEdit(e)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <button onClick={() => handleComplete(e)}><i class="fa fa-check" aria-hidden="true"></i></button>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

export default ToDoList;