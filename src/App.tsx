import React from 'react';

import { Header } from "./components/Header";
import { AddToDo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDoList";
import { Footer } from "./components/Footer";

import { ToDoProvider } from "./context/ToDoContext"

const App: React.FC = () => {
  return (
    <ToDoProvider>
       <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
        <div className="max-w-xl mx-auto space-y-4">
          <Header />
          <AddToDo />
          <ToDoList />
          <Footer />
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App;