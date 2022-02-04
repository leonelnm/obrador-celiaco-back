import { useContext, useEffect, useState } from 'react'
import Context from '../context/userContext'
import { getAllProducts } from '../services/productService'
import hasAnyError from '../validators/responseValidator'

export const useProducts = () => {
  const { jwt: token } = useContext(Context)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts(token)
      .then(data => {
        if (!hasAnyError(data)) {
          setProducts(data)
        }
        setLoading(false)
      })
  }, [])

  return { loading, products }
}
