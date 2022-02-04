import { useContext, useEffect, useState } from 'react'
import Context from '../context/userContext'
import { getProductById } from '../services/productService'

export const useProductsById = ({ id }) => {
  const { jwt: token } = useContext(Context)

  console.log(token)

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProductById(id, token)
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [])

  return { loading, product }
}
