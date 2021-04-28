import { FaTimes, FaCheck } from "react-icons/fa";

const Task = ({ name, id, isCompleted, deleteTask, completedTask }) => {
  const taskStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ebebeb",
    marginTop: "0.5rem",
    padding: "0.5rem 0.75rem",
  };

  const liStyle = {
    textDecoration: isCompleted ? "line-through" : "none",
    color: isCompleted ? "grey" : "black",
    fontSize: "1.25rem",
  };

  return (
    <div className="task" style={taskStyle}>
      <li style={liStyle}>{name}</li>
      <div>
        <span style={{ marginRight: "0.75rem" }}>
          <FaCheck
            color="green"
            cursor="pointer"
            onClick={() => completedTask(id)}
          />
        </span>
        <span>
          <FaTimes
            color="red"
            cursor="pointer"
            onClick={() => deleteTask(id)}
          />
        </span>
      </div>
    </div>
  );
};

export default Task;
