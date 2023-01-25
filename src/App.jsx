import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <div className="bg-gray-900 h-screen pt-3">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
