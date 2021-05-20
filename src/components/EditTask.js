import styled from "styled-components";
import { useTask } from "../context/TasksContext";

const EditModal = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 500px;
  min-width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  background: #fff;
  padding: 0.5rem 1rem;
`;

const EditTask = () => {
  const { updateTask, setIsModalOpen, setNewTaskName, newTaskName } = useTask();

  return (
    <EditModal>
      <section className="modal-header">
        <h2>Edit Task</h2>
      </section>
      <form className="modal-body" onSubmit={updateTask}>
        <label htmlFor="task-name" className="form-label">
          New task name
        </label>
        <input
          type="text"
          value={newTaskName}
          className="task-name form-control"
          onChange={e => setNewTaskName(e.target.value)}
        />
        <section className="modal-footer" style={{ padding: "1rem 0" }}>
          <span
            className="btn btn-danger"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </span>
          <button className="btn btn-success ms-2">Submit</button>
        </section>
      </form>
    </EditModal>
  );
};

export default EditTask;
