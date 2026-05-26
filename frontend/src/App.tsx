import { Route, Routes } from 'react-router-dom'
import './style/App.css'
import './style/Home.css'
import './style/Runclub.css'
import './style/Event.css'
import './style/LoginForm.css'
import './style/RegisterForm.css'
import './style/Account.css'
import './style/Header.css'
import './style/NavBar.css'
import Home from './components/Pages/Home'
import Events from './components/Pages/Events'
import Runclubs from './components/Pages/Runclubs'
import Meny from './components/Meny'
import ScrollToTop from './components/ScrollToTop'
import LoginForm from './components/Pages/LoginForm'
import RegisterForm from './components/Pages/RegisterForm'
import CreateEvent from './components/Pages/CreateEvent'
import CreateRunClub from './components/Pages/CreateRunClub'
import MyAccount from './components/Pages/MyAccount'
import ErrorBoundory from './components/ErrorBoundory'
import CreatePostForAccount from './components/Pages/PostForm'

function App() {

  return (
    <ErrorBoundory>

    <div className='main-container'>

      <ScrollToTop />
      
        <header className="header">
          <Meny />
        </header>



      <main>
        <Routes>
            <Route path='/' element={<Home /> }></Route>
            <Route path='/Events' element={<Events />}></Route>
            <Route path='/Runclubs' element={<Runclubs />}></Route>
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
            <Route path='/CreateEvent' element={<CreateEvent /> } />
            <Route path='/CreateRunClub' element={<CreateRunClub />} />
            <Route path='/MyAccount' element={<MyAccount />} />
            <Route path='/CreatePostForAccount' element={<CreatePostForAccount />} />
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </main>

      <footer>
        <p>@2026</p>
      </footer>

    </div>
  </ErrorBoundory>
  )
}

export default App
