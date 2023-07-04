import './App.css'
import {Route,Routes} from 'react-router-dom'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Contact}/>
      </Routes>
    </>
  )
}

export default App
