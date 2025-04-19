import { useContext, useState } from "react"
import { TaskDetails } from "./AddToDo"

interface ToDoListProps {
    onEditButtonClick: (task: string, index:number) => void;
}


export function ToDoList({ onEditButtonClick }: ToDoListProps) {

    const [isEditButtonClicked, setIsEditButtonClicked]=useState(false)
    const addedTasks = useContext(TaskDetails)

    function onEditButtonClicked(task:string, index:number){
        onEditButtonClick(task, index)
    }
    function onDeleteButtonClicked(){}

    return (
        <>
            <div>
                <h3 className="font-medium text-gray-800">Added Tasks:</h3>
                {addedTasks.map((task, index) => (
                    <p key={index} className="text-gray-700 mb-1">
                        {index + 1}. {task}
                        <button
                        onClick={()=> onEditButtonClicked(task, index)}
                        className="bg-blue-400 hover:bg-blue-700 text-white text-sm px-3 ml-2 py-1 rounded-lg transition-colors"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onDeleteButtonClicked}
                        className="bg-red-500 hover:bg-blue-700 text-white text-sm px-3 ml-2 py-1 rounded-lg transition-colors"
                    >
                        Delete
                    </button>
                    </p>
                ))}
            </div>
        </>
    )
}