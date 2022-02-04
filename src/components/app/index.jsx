import { UserContextProvider } from '../../context/userContext'
import Router from '../../router'
import { Navbar } from '../navbar'

export default function App () {
  return (
    <UserContextProvider>
      <header>
        <Navbar/>
      </header>
      <main>
        <Router />
      </main>
    </UserContextProvider>

  )
}
