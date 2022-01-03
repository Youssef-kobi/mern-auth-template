// import SideBar from './SideBar/SideBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Classes from './Header.module.css'
import NavBar from './NavBar/NavBar'

const Header = () => {
  // const [Toggle, setToggle] = useState(false)
  // const toggleOn = () => setToggle(!Toggle)
  const [activebg, setactivebg] = useState(false)
  const bgHandler = () => {
    if (window.scrollY > 56) setactivebg(true)
    if (window.scrollY > 100) setactivebg(true)
    if (window.scrollY <= 56) setactivebg(false)
  }
  window.addEventListener('scroll', bgHandler)
  return (
    <div className={`${Classes.header} ${activebg && Classes.active}`}>
      <div className={Classes.toggle_logo}>
        <Link className={Classes.logo} to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
        <div className={Classes.toggle}>
          <button type='button'>
            <svg
              id='light'
              enableBackground='new 0 0 512 512'
              viewBox='0 0 24 24'
              width='100%'
              height='100%'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='m21.5 24h-19c-1.379 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v19c0 1.378-1.121 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z' />
              </g>
              <g>
                <path d='m16.5 8h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z' />
              </g>
              <g>
                <path d='m16.5 12.5h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z' />
              </g>
              <g>
                <path d='m16.5 17h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z' />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <NavBar />
      {/* {Toggle && (
        <div>
          <SideBar />
          <div className={Classes.backdrop} onClick={toggleOn}></div>
        </div>
      )} */}
    </div>
  )
}

export default Header
