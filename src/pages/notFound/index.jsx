import css from './404.module.css'

export default function NotFound () {
  return (
    <section className={css.error404box}>
      <div className={css.error404}>
        <div>404</div>
        <div>Not Found</div>
      </div>
      <a href="/">Visitar pantalla principal</a>
    </section>
  )
}
