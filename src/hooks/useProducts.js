import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const uri = import.meta.env.VITE_API_URI

  useEffect(() => {
    console.log('effect')
    fetch(`${uri}/api/product`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return { loading, products }
}
