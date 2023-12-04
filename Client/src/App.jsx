import { Route, Routes } from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'

function App() {

  return (
    <>
     <main className='app'>
        <Routes>
          <Route index element={<Todo />} />
        </Routes>
     </main>
    </>
  )
}

export default App
