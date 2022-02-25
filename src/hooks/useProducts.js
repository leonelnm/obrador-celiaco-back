import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { getAllProducts } from '../services/productService'
import hasAnyError from '../validators/responseValidator'
import useUser from './useUser'

export const useProducts = () => {
  const { token, logout } = useUser()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [, navigate] = useLocation()

  useEffect(() => {
    getAllProducts(token)
      .then(data => {
        if (!hasAnyError(data)) {
          setProducts(data)
        } else {
          logout()
          navigate('/login')
        }
        setLoading(false)
      })
      .catch(res => {
        setLoading(false)
        logout()
        navigate('/login')
      })
  }, [token])

  return { loading, products }
}
