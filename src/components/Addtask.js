import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ task, setTask, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((e) =>
            e.id === id ? { title, id, completed } : e
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(() => {
        if (editTodo) {
            setTask(editTodo.title);
        }
        else {
            setTask("");
        }
    }, [setTask, editTodo])
    const taskFunction = (e) => {
        setTask(e.target.value);
    }

    const submitFunction = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: task, completed: false }]);
            setTask("");
        }
        else {
            updateTodo(task, editTodo.id, editTodo.completed)
        }
    }
    return (
        <div>
            <form onSubmit={submitFunction} className="add-form" >
                <div className="form-control">
                    <label>Task</label>
                    <input value={task} onChange={taskFunction} type="text" name="text" placeholder="Add Task" />
                </div>
                <button className="btn btn-block">{editTodo ? "Okay" : "Save Task"}</button>
            </form >
        </div>
    )
}

export default AddTask;
