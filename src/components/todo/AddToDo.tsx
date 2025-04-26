
import { useAddToDo } from "../../hooks/useAddToDo";

export function AddToDo() {
  const { addTask, addedTask, handleAddTask, handleAddTaskButtonClicked } = useAddToDo();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full mt-6">
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={addTask}
          onChange={(e) => handleAddTask(e.target.value)}
          placeholder="Enter your task ..."
          className="flex-1 text-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTaskButtonClicked}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Add Task
        </button>
      </div>

      <div>
        <h3 className="font-medium text-gray-800">Tasks:</h3>
        <ul className="mt-2">
          {addedTask.map((task, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {index + 1}. {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}