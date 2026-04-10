import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import './Home.css'
import './Runclub.css'
import './Event.css'
import Home from './components/Pages/Home'
import Events from './components/Pages/Events'
import Runclubs from './components/Pages/Runclubs'
import Meny from './components/Meny'
import ScrollToTop from './components/ScrollToTop'
import LoginForm from './components/Pages/LoginForm'
import RegisterForm from './components/Pages/RegisterForm'

function App() {

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className='main-container'>

      <ScrollToTop />

      <main>
        <Routes>
            <Route path='/LoginForm' element={<LoginForm /> }></Route>
            <Route path='/RegisterForm' element={<RegisterForm />}></Route>
        </Routes>
      </main>

      {!isHome && (
        <header className="header">
          <Meny />
        </header>
      )}


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
