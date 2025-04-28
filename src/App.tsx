import { Header } from './components/common/Header'
import './App.css'
import { ReactHookForms } from './components/react-hook-forms/ReactHookForms'

function App() {

  return (
    <>
      <div className="bg-gray-50">
        <Header />
        <div className='flex'>
          <ReactHookForms />
        </div>
      </div>
    </>
  )
}

export default App
