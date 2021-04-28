import Task from "./Task";

const Tasks = ({ tasks, deleteTask, completedTask }) => {
  const style = {
    listStyle: "none",
    width: "100%",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <ul style={style}>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        ))
      ) : (
        <h3>No tasks available</h3>
      )}
    </ul>
  );
};

export default Tasks;
