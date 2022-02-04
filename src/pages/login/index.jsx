import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'

export const Login = () => {
  const [email, setEmail] = useState('1@com')
  const [password, setPassword] = useState('123abc')
  const [, navigate] = useLocation()
  const { isLogged, login, isLoading, hasError } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <>
      <h2>Vamos a Iniciar Sesión</h2>
      {isLoading && <strong>Validando Credenciales...</strong>}

      {!isLoading &&
        <form onSubmit={handleSubmit}>
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
          <input
            type="password"
            placeholder="contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password} />
          <button type="submit">Acceder</button>
        </form>
      }
      {
        hasError && <strong>Credenciales incorrectas!</strong>
      }
    </>
  )
}
