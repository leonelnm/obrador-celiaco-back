import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import styles from './login.module.css'

export const Login = () => {
  const [email, setEmail] = useState('1@com')
  const [password, setPassword] = useState('123abc')
  const [, navigate] = useLocation()
  const { isLogged, login, isLoading, hasError } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <main className={styles.container}>
      <h2>Iniciar Sesión</h2>
      {isLoading && <strong>Validando Credenciales...</strong>}

      {!isLoading &&
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </label>

          <label>
            Contraseña:
            <input
              type="password"
              placeholder="contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />

          </label>

          <button className={styles.btn} type="submit">Acceder</button>
        </form>
      }
      {
        hasError && <strong>Credenciales incorrectas!</strong>
      }
    </main>
  )
}
