import { useTask } from "../context/TasksContext";
import PendingTask from "./PendingTask";

const PendingTasks = () => {
  const { deleteTask, openModal, pendingTasks, setCompletedTask } = useTask();
  const renderPendingTasks = () => {
    if (pendingTasks.length <= 0) return <h4>No tasks pending</h4>;

    return pendingTasks.map((task, index) => {
      return (
        <PendingTask
          key={task.id}
          id={task.id}
          name={task.name}
          deleteTask={deleteTask}
          openModal={openModal}
          index={index}
          setCompletedTask={setCompletedTask}
        />
      );
    });
  };

  return (
    <ul className="pending-tasks">
      <h4>Pending Tasks</h4>
      {renderPendingTasks()}
    </ul>
  );
};

export default PendingTasks;
