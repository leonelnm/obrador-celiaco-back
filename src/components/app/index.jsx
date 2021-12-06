import Router from '../../router'
import { Navbar } from '../navbar'

export default function App () {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Router />
      </main>
    </>

  )
}
