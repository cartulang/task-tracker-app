import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30vw",
    maxWidth: "600px",
    minWidth: "300px",
  };
  const [newTask, setNewTask] = useState([]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Cook breakfast",
      isCompleted: true,
    },
    {
      id: 2,
      name: "Water plants",
      isCompleted: true,
    },
    {
      id: 3,
      name: "Study react",
      isCompleted: false,
    },
  ]);

  // checks for duplicate task

  const checkDuplicate = name => {
    return tasks.some(task => {
      if (task.name.toLowerCase() === name.toLowerCase()) return true;
      return false;
    });
  };

  // deletes task

  const deleteTask = id => {
    setTasks(
      tasks.filter(task => {
        return task.id !== id;
      })
    );
  };

  //toggle complete task

  const completedTask = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // appends new task

  const addTask = e => {
    e.preventDefault();
    if (newTask === null || newTask === "")
      return alert("Please enter task name");

    if (checkDuplicate(newTask)) return alert("Task already exist!");

    setTasks(
      tasks.concat({ name: newTask, id: Date.now(), isCompleted: false })
    );
  };

  return (
    <div className="App" style={style}>
      <Header />
      <AddTasks
        addTask={addTask}
        setNewTask={setNewTask}
        checkDuplicate={checkDuplicate}
      />
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        completedTask={completedTask}
      />
    </div>
  );
}

export default App;
