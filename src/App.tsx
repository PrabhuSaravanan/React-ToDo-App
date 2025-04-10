import { Header } from './components/common/Header'
import { Menu } from './components/common/Menu'
import { ToDoWrapper } from './components/todo/ToDoWrapper'
import './App.css'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <Menu />
        <main className="flex-1 p-4">
          <ToDoWrapper />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
