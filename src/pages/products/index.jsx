import { ProductDetail } from '../../components/products/ProductDetail'
import { useProductsById } from '../../hooks/useProductById'

export default function ProductDetailPage ({ id }) {
  const { product, loading } = useProductsById({ id })
  return (
    <>
      {
        loading ? <h1>Cargando</h1> : <ProductDetail product={product}/>
      }
    </>
  )
}
