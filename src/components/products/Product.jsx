import { Link } from 'wouter'
import css from './products.module.css'

export const Product = ({ id, name, price, img, imgAlt, content }) => {
  const url = `/products/${id}`

  const contenido = content ? content.split('<>') : []

  return (
    <article className={css.productCard}>
      <div className={css.productCardImage}>
        <img src={img} alt={imgAlt} />
      </div>

      <section className={css.productCardBody}>
        <section className={css.productCardTitle}>
          <header>{name}</header>
          <div>{price}€</div>
        </section>

        <section>
          {contenido && contenido.map(c => <p key={c}>{c}</p>)}
        </section>
      </section>

      <Link href={url}>
        <a>Modificar</a>
      </Link>

    </article>
  )
}
