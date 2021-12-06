import { Product } from './Product'
import css from './products.module.css'

export const ListProducts = ({ products }) => {
  return (
    <section className={css.listado}>
      {
        products.map(item => <Product
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.imgUrl}
          imgAlt={item.imgId}
          price={item.price}
          content={item.content}
        />)
      }
    </section>
  )
}
