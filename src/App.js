import './App.css';
import AddTask from "./components/Addtask";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from 'react';


function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || []; //to parse todos to local storage to prevent refresh

  const [show, setShow] = useState(false)
  const [showButtonText, setShowButtonText] = useState(true);
  const [buttonColor, setButtonColor] = useState(true);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  })
  const toggleAddTask = () => {
    setShow(!show)
    setShowButtonText(!showButtonText);
    setButtonColor(!buttonColor);
  }

  return (
    <div className="App">
      <div className="container">
        <Header
          toggleAddTask={toggleAddTask}
          btnText={showButtonText ? `Add Task` : `Close`}
          color={buttonColor ? `green` : `red`}
        />
        {show ?
          <AddTask
            task={task}
            setTask={setTask}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          : null
        }

        <ToDoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
}

export default App;
