import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Register from './Components/Auth/Register/Register'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login/Login'
import Classes from './App.module.css'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main className={Classes.main}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
