import { useState } from "react"

export function ToDoWrapper () {

    const [addedTask, setAddedTask] = useState("")
    const [isButtonHit, setButtonHit] = useState(false)

    function buttonClicked() {
        {
            setButtonHit(true)
        }
    }
    
    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto my-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Task</h2>
        <div className="flex mb-4">
            <input 
                type="text" 
                value={addedTask} 
                onChange={(e) => setAddedTask(e.target.value)}
                placeholder="Enter your task"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                onClick={buttonClicked} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition-colors"
            >
                Add Task
            </button>
        </div>
        
        {isButtonHit && addedTask && (
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
                <h3 className="font-medium text-gray-800 mb-1">Added Task:</h3>
                <p className="text-gray-700">{addedTask}</p>
            </div>
        )}
    </div>
    )
}