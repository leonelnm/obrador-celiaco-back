import { useEffect, useState } from 'react'
import { getProductById } from '../services/productService'
import { useToken } from './useToken'

export const useProductsById = ({ id }) => {
  const token = useToken()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProductById(id, token)
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [token])

  return { loading, product }
}
