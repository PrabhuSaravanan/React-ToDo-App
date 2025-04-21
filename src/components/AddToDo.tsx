import { useContext, useState, useRef } from "react";
import { ToDoContext } from "../context/ToDoContext";

export const AddToDo: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const toDoContext = useContext(ToDoContext); // Access the context

  if (!toDoContext) {
    return null; // If the context is null (not provided), return nothing
  }

  const { addToDo } = toDoContext; // Destructure addToDo from the context

  const onButtonClicked = () => {
    if (newTask.trim()) {
      addToDo(newTask); // Call addToDo from context
      setNewTask(''); // Reset the input value
      inputRef.current?.focus(); // Focus input field again
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        ref={inputRef} // Set the ref to the input element
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // Update newTask on input change
        placeholder="Enter a task"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={onButtonClicked} // Add task on button click
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};
