import { useEffect, useState } from 'react'

export const useProductsById = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`http://192.168.1.137:3010/api/product/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProduct(data)
        setLoading(false)
      })
  }, [])

  return { loading, product }
}
