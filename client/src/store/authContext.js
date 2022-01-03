import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token')
  const [token, settoken] = useState(initialToken)
  const userIsLoggedIn = !!token
  const loginHandler = (logintoken) => {
    settoken(logintoken)
    localStorage.setItem('token', token)
  }

  const logoutHandler = () => {
    settoken(null)
    localStorage.removeItem('token')
  }
  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }
  const foo = useMemo(() => contextValue, [contextValue.isLoggedIn])
  return <AuthContext.Provider value={foo}>{children}</AuthContext.Provider>
}
AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
export default AuthContext
