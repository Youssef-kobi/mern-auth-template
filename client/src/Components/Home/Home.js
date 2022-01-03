import { useContext } from 'react'
import Classes from './Home.module.css'
import AuthContext from '../../store/authContext'

const Home = () => {
  const AuthCtx = useContext(AuthContext)
  return (
    <div className={Classes.main}>
      <h1>Home</h1>
      <h3> User Is {AuthCtx.isLoggedIn ? 'Logged In' : 'Logged Out'}</h3>
    </div>
  )
}

export default Home
