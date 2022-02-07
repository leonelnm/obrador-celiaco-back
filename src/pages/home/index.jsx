import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { ListProducts } from '../../components/products/ListProducts'
import { useProducts } from '../../hooks/useProducts'
import classes from './home.module.css'

export default function Home () {
  const { products, loading } = useProducts()
  const [counter, setCounter] = useState(0)
  const [productsFilter, setProductsFilter] = useState(products)

  const [search, setSearch] = useState(() => {
    const searcherSaved = localStorage.getItem('obrador-searcher')
    return searcherSaved || ''
  })

  useEffect(() => {
    setCounter(products.length)
    filterProducts(search)
  }, [loading])

  const filterProducts = (input) => {
    const resultFilter = products.filter(p => normalize(p.name.toLowerCase()).includes(normalize(input)))
    setCounter(resultFilter.length)
    setProductsFilter(resultFilter)

    localStorage.setItem('obrador-searcher', input)
    setSearch(input)
  }

  const normalize = (str = '') => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const handlerSearch = (e) => {
    filterProducts(e.target.value.trim().toLowerCase())
  }

  return (
    <>
      <header className={classes.headerHome}>
        <div>Productos ({counter})</div>
        <Link href="/product">Crear Nuevo</Link>
      </header>

      <div className={classes.searcher}>
        <label>Buscar:</label>
        <input type="text" onChange={handlerSearch} value={search} placeholder="empanadilla"/>
      </div>

      {
        loading ? <h1>Cargando...</h1> : <ListProducts products={productsFilter} />
      }
    </>
  )
}
