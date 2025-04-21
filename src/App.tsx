import { AddToDo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDoList";
import { ToDoProvider } from "./context/ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <div className="max-w-md mx-auto mt-8 p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <AddToDo />
        <div className="mt-4">
          <ToDoList />
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;