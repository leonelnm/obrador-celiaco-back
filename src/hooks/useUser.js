import { useCallback, useContext, useState } from 'react'
import Context from '../context/userContext'
import loginService from '../services/loginService'

export default function useUser () {
  const { jwt, setJwt } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ email, password }) => {
    setState({ loading: true, error: false })

    loginService({ email, password })
      .then(({ token }) => {
        window.localStorage.setItem('obradorbk-token', token)
        setJwt(token)
        setState({ loading: false, error: false })
      })
      .catch(() => {
        window.localStorage.removeItem('obradorbk-token')
        setState({ loading: false, error: true })
      })
  }, [setJwt])

  const logout = useCallback(() => {
    window.localStorage.removeItem('obradorbk-token')
    setJwt(null)
  }, [setJwt])

  return {
    isLogged: Boolean(jwt),
    isLoading: state.loading,
    hasError: state.error,
    token: jwt,
    login,
    logout
  }
}
