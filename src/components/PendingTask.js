import { FaTimes, FaCheck, FaEdit } from "react-icons/fa";

const taskStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#ebebeb",
  marginTop: "1rem",
  padding: "0.5rem 0.75rem",
};

const PendingTask = ({
  name,
  id,
  deleteTask,
  setCompletedTask,
  openModal,
  index,
}) => {
  return (
    <>
      <div style={taskStyle}>
        <li className="pending-task">
          <p>{name}</p>
        </li>
        <div>
          <span style={{ marginRight: "0.75rem" }}>
            <FaEdit
              color="black"
              cursor="pointer"
              onClick={() => openModal(id)}
            />
          </span>
          <span style={{ marginRight: "0.75rem" }}>
            <FaCheck
              color="green"
              cursor="pointer"
              onClick={() => setCompletedTask(id)}
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
    </>
  );
};

export default PendingTask;
