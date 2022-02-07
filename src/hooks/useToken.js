import { useContext } from 'react'
import Context from '../context/userContext'

export const useToken = () => {
  const { jwt: token } = useContext(Context)
  return token
}
