import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export const useTask = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [newTask, setNewTask] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [currentTask, setCurrentTask] = useState("");
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

  // completed tasks
  const completedTasks = tasks.filter(task => task.isCompleted === true);

  // pending tasks
  const pendingTasks = tasks.filter(task => task.isCompleted !== true);

  // checks for duplicate task

  const checkDuplicate = name => {
    return tasks.some(task => {
      if (task.name.toLowerCase() === name.toLowerCase()) return true;
      return false;
    });
  };

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // opens modal

  const openModal = taskId => {
    setIsModalOpen(true);

    setCurrentTask(taskId);
  };

  // updates task
  const updateTask = e => {
    e.preventDefault();
    setIsModalOpen(false);

    let newTaskName = e.target[0].value;

    if (newTaskName === null || newTaskName === "")
      return alert("Please enter task name");

    if (checkDuplicate(newTaskName)) return alert("Task already exist!");

    const index = tasks.findIndex(task => task.id === currentTask);

    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      name: newTaskName,
    };
    setNewTaskName([]);
    setTasks(updatedTasks);
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

  const setCompletedTask = id => {
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

    setNewTask([]);
  };

  return (
    <TasksContext.Provider
      value={{
        addTask,
        completedTasks,
        pendingTasks,
        deleteTask,
        openModal,
        updateTask,
        isModalOpen,
        setIsModalOpen,
        setCurrentTask,
        tasks,
        currentTask,
        newTaskName,
        setNewTaskName,
        newTask,
        setNewTask,
        setCompletedTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
