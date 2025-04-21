import { createContext, ReactNode, useState } from "react";

// Define the task type
type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

// Define the context type
type ToDoContextType = {
  toDo: ToDo[];
  addToDo: (text: string) => void;
  deleteToDo: (id: number) => void;
  editToDo: (id: number, newText: string) => void; // Add the editToDo function
};

// Initialize the context with null as a default value
export const ToDoContext = createContext<ToDoContextType | null>(null);

// Provider component
export const ToDoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const addToDo = (text: string) => {
    const newTask: ToDo = {
      id: Date.now(), // Unique ID for each task
      text,
      completed: false,
    };
    setToDoList([...toDoList, newTask]); // Add new task to the list
  };

  const deleteToDo = (id: number) => {
    setToDoList(toDoList.filter((task) => task.id !== id)); // Delete task by ID
  };

  const editToDo = (id: number, newText: string) => {
    setToDoList(
      toDoList.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    ); // Update the task text
  };

  return (
    <ToDoContext.Provider value={{ toDo: toDoList, addToDo, deleteToDo, editToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
