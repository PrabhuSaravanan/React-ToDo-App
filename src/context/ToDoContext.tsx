import { createContext } from "react";

const ToDoContext = createContext('');

  export const ToDoProvider: React.FC = () => {
    return (
        <>
        <ToDoContext.Provider value={''}>

        </ToDoContext.Provider>
        </>
    )
  }