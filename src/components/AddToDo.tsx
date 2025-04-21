import { useContext, useState, useRef } from "react";
import { ToDoContext } from "../context/ToDoContext";

export const AddToDo: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const toDoContext = useContext(ToDoContext); 

  if (!toDoContext) {
    return null; 
  }

  const { addToDo } = toDoContext; 

  const onButtonClicked = () => {
    if (newTask.trim()) {
      addToDo(newTask); 
      setNewTask(''); 
      inputRef.current?.focus();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        ref={inputRef} 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={onButtonClicked} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
};
