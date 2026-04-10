import { Route, Routes, useLocation } from 'react-router-dom'
import './style/App.css'
import './style/Home.css'
import './style/Runclub.css'
import './style/Event.css'
import './style/LoginForm.css'
import './style/RegisterForm.css'
import Home from './components/Pages/Home'
import Events from './components/Pages/Events'
import Runclubs from './components/Pages/Runclubs'
import Meny from './components/Meny'
import ScrollToTop from './components/ScrollToTop'
import LoginForm from './components/Pages/LoginForm'
import RegisterForm from './components/Pages/RegisterForm'

function App() {

  const location = useLocation();

  const hideMain = location.pathname === "/LoginForm" || "/RegisterForm";

  const isHome = location.pathname === "/";

  return (
    <div className='main-container'>

      <ScrollToTop />
      

      {!hideMain || !isHome && (
        <header className="header">
          <Meny />
        </header>
      )}

      <main>
        <Routes>
            <Route path='/' element={<Home /> }></Route>
            <Route path='/Events' element={<Events />}></Route>
            <Route path='/Runclubs' element={<Runclubs />}></Route>
            <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
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
