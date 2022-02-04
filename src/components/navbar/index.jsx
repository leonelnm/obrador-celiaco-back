import { Link } from 'wouter'
import useUser from '../../hooks/useUser'
import styles from './navbar.module.css'

export function Navbar () {
  const { isLogged, logout } = useUser()

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Obrador el Celiaco</a>
      </Link>

      {
        isLogged &&
        <Link href="/login" onClick={logout}>
          <a>Cerrar Sesión</a>
        </Link>
      }

    </nav>
  )
}
