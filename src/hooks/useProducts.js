import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { getAllProducts } from '../services/productService'
import hasAnyError from '../validators/responseValidator'
import { useToken } from './useToken'

export const useProducts = () => {
  const token = useToken()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [, navigate] = useLocation()

  useEffect(() => {
    getAllProducts(token)
      .then(data => {
        if (!hasAnyError(data)) {
          setProducts(data)
        } else {
          navigate('/login')
        }
        setLoading(false)
      })
      .catch(res => {
        setLoading(false)
        navigate('/login')
      })
  }, [token])

  return { loading, products }
}
