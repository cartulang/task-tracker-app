import { FaTrashAlt, FaRecycle } from "react-icons/fa";

const CompletedTask = ({ name, id, deleteTask, setCompletedTask }) => {
  const taskStyle = {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ebebeb",
    marginTop: "1rem",
    padding: "0.5rem 0.75rem",
  };

  return (
    <>
      <div style={taskStyle}>
        <li className="completed-task">
          <p>{name}</p>
        </li>
        <div>
          <span style={{ marginRight: "0.75rem" }}>
            <FaRecycle
              color="green"
              cursor="pointer"
              onClick={() => setCompletedTask(id)}
            />
          </span>
          <span>
            <FaTrashAlt
              color="black"
              cursor="pointer"
              onClick={() => deleteTask(id)}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default CompletedTask;
