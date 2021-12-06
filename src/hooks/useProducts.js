import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log('effect')
    fetch('http://192.168.1.137:3010/api/product')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return { loading, products }
}
