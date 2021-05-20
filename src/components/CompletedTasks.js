import { useTask } from "../context/TasksContext";
import CompletedTask from "./CompletedTask";

const CompletedTasks = () => {
  const { deleteTask, completedTasks, setCompletedTask } = useTask();

  const renderCompletedTasks = () => {
    if (completedTasks.length <= 0) return <h4>No tasks complete</h4>;

    return completedTasks.map(task => {
      return (
        <CompletedTask
          key={task.id}
          id={task.id}
          name={task.name}
          isCompleted={task.isCompleted}
          deleteTask={deleteTask}
          setCompletedTask={setCompletedTask}
        />
      );
    });
  };
  return (
    <ul className="completed-tasks">
      <h4>Completed Tasks</h4>
      {renderCompletedTasks()}
    </ul>
  );
};

export default CompletedTasks;
