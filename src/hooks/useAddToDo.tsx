import { useState } from "react";

export function useAddToDo() {
    const [addTask, setAddTask] = useState<string>('');
    const [addedTask, setAddedTask] = useState<string[]>([]);

    const handleAddTask = (task:string) => {
        setAddTask(task);
    };

    const handleAddTaskButtonClicked = () => {
        setAddedTask([...addedTask, addTask]);
        setAddTask('');
    };

    return {
        addTask, 
        addedTask,
        handleAddTask,
        handleAddTaskButtonClicked
    };
}