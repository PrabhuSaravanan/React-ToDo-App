import { createContext, useState } from "react"
import { ToDoList } from "./ToDoList"

export const TaskDetails = createContext<string[]>([]);

export function AddToDo() {
    const [addTask, setAddTask] = useState('')
    const [addedTask, setAddedTask] = useState<string[]>([])

    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)
    const [isAddTaskButtonClicked, setIsAddTaskButtonClicked] = useState(false)

    function addTaskButtonClicked() {
        setAddedTask([...addedTask, addTask])
        setAddTask('')
    }

    function onEditButtonClick(task: string) {
        setIsAddTaskButtonClicked(true)
        setIsEditButtonClicked(true); 
        setAddTask(task)
    }

    return (
        <TaskDetails.Provider value={addedTask}>
            <div className="p-6 bg-white rounded-lg shadow-md w-full mt-6">
                <div className="flex mb-4 gap-2">
                    <input
                        type="text"
                        value={addTask}
                        onChange={(e) => setAddTask(e.target.value)}
                        placeholder="Enter your task ..."
                        className="flex-1 text-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={addTaskButtonClicked}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        {isEditButtonClicked ? 'Update Task' : 'Add Task'}
                    </button>
                </div>

                <ToDoList onEditButtonClick={onEditButtonClick} />

            </div>
        </TaskDetails.Provider>
    )
}