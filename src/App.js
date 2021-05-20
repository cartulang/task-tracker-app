import PendingTasks from "./components/PendingTasks";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import EditTask from "./components/EditTask";
import { useTask } from "./context/TasksContext";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const { isModalOpen } = useTask();
  return (
    <div className="App">
      <Header />
      <AddTasks />
      <section className="task-tracker-body">
        <PendingTasks />
        <CompletedTasks />
      </section>

      {isModalOpen && <EditTask />}
    </div>
  );
}

export default App;
