// App.tsx
import { ToDoProvider } from "./context/ToDoContext";
import { AddToDo } from "./components/AddToDo";

function App() {
  return (
    <ToDoProvider>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">ToDo App</h1>
        <AddToDo />
      </div>
    </ToDoProvider>
  );
}

export default App;
