import { createContext, ReactNode, useState } from "react";


type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};


type ToDoContextType = {
  toDo: ToDo[];
  addToDo: (text: string) => void;
  deleteToDo: (id: number) => void;
  editToDo: (id: number, newText: string) => void;
};

export const ToDoContext = createContext<ToDoContextType | null>(null);


export const ToDoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const addToDo = (text: string) => {
    const newTask: ToDo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setToDoList([...toDoList, newTask]);
  };

  const deleteToDo = (id: number) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const editToDo = (id: number, newText: string) => {
    setToDoList(
      toDoList.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <ToDoContext.Provider value={{ toDo: toDoList, addToDo, deleteToDo, editToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
