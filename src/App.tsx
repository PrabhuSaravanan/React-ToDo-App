import { Header } from './components/common/Header'
import { Menu } from './components/common/Menu'
import { ToDoWrapper } from './components/todo/ToDoWrapper'
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className='flex'>
          <Menu />
          <ToDoWrapper />
        </div>
      </div>
    </>
  )
}

export default App
