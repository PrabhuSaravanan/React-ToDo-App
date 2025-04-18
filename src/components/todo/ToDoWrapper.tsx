import { useState } from "react"

export function ToDoWrapper() {

    const [addTask, setAddTask] = useState('')
    const [addedTask, setAddedTask] = useState<string[]>([])
    const [isButtonHit, setButtonHit] = useState(false)
    const [editTaskIndex, setEditTaskIndex] = useState<number>()

    function addTaskButtonClicked() {
        if ( editTaskIndex == null) {
        if (addTask !== '') {
            setButtonHit(true)
            setAddedTask([...addedTask, addTask])
            setAddTask('')
        }
    } else {
        const updatedTask = addedTask.map((task, index)=> index === editTaskIndex ? addTask : task)
        setAddedTask(updatedTask)
    }
    }


    const deleteTask = (indexToDelete: number) => {
        const updatedTask = addedTask.filter((_, index) => index !== indexToDelete);
        setAddedTask(updatedTask);
    };

    const editTask = (indexToEdit: number) => {
        const taskToEdit = addedTask[indexToEdit]
        setEditTaskIndex(indexToEdit)
        setAddTask(taskToEdit)
    }

    return (
        <>
            <div className="p-6 bg-white rounded-lg shadow-md w-full">
                <h2 className="font-sans text-gray-800 mb-4">Add Task</h2>
                <div className="flex mb-4 gap-1 w-full">
                    <input
                        type="text"
                        value={addTask}
                        onChange={(e) => setAddTask(e.target.value)}
                        placeholder="Enter your task"
                        className="px-4 border pl-4 w-full text-md border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={addTaskButtonClicked}
                        className="bg-blue-600 w-28 p-2 hover:bg-blue-700 text-white rounded-r-lg transition-colors"
                    >
                        Add Task
                    </button>
                </div>

                {isButtonHit && addedTask.length > 0 && (
                    <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
                        <h3 className="font-medium text-gray-800 mb-1">Added Tasks:</h3>

                        {addedTask.map((task, index) => (
                            <div className="mb-1">
                                <p key={index} className="text-gray-700">{index + 1}. {task}
                                    <button onClick={()=> editTask(index)} className="bg-blue-500 px-2 p-1 hover:bg-blue-800 ml-2 text-white rounded-lg transition-colors">Edit</button>
                                    <button onClick={() => deleteTask(index)} className="bg-red-500 ml-2 px-2 p-1 hover:bg-red-700 text-white rounded-lg transition-colors">Delete</button>
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
