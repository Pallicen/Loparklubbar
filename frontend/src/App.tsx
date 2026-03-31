import { Route, Routes } from 'react-router-dom'
import './App.css'
import Meny from './components/Meny'
import Home from './components/Pages/Home'
import Events from './components/Pages/Events'
import Runclubs from './components/Pages/Runclubs'

function App() {

  return (
    <div>
      <header>
          <Meny />
      </header>

      <main>
        <Routes>
            <Route path='/' element={<Home /> }></Route>
            <Route path='/Events' element={<Events />}></Route>
            <Route path='/Runclubs' element={<Runclubs />}></Route>
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </main>

      <footer>
        <p>© 2026 Löparplattformen. Alla rättigheter reserverade.</p>
      </footer>
    </div>
  )
}

export default App
