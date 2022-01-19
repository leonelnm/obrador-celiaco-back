import { useEffect, useState } from 'react'

export const useProductsById = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  const uri = import.meta.env.VITE_API_URI

  useEffect(() => {
    fetch(`${uri}/api/product/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProduct(data)
        setLoading(false)
      })
  }, [])

  return { loading, product }
}
