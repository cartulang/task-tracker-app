const AddTasks = ({ newTask, setNewTask, addTask }) => {
  const inputText = {
    padding: "0.5rem 0.75rem",
    fontSize: "1rem",
  };

  const formStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const btnStyle = {
    fontSize: "1rem",
    padding: "0.5rem 0.75rem",
    marginLeft: "0.5rem",
    backgroundColor: "#198754",
    color: "white",
    border: "none",
  };
  return (
    <form onSubmit={addTask} style={formStyle}>
      <input
        value={newTask}
        type="text"
        placeholder="Add task"
        onChange={e => setNewTask(e.target.value)}
        style={inputText}
        required
      />
      <button type="submit" style={btnStyle}>
        Add
      </button>
    </form>
  );
};

export default AddTasks;
