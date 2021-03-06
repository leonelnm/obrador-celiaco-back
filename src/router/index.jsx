import { Route, Switch } from 'wouter'
import Home from '../pages/home'
import { LoginPage } from '../pages/login'
import NewProduct from '../pages/newProduct'
import NotFound from '../pages/notFound'
import ProductDetailPage from '../pages/products'

export default function Router () {
  return (
    <>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/product" component={NewProduct} />
      <Route path="/products/:id">
        {(params) => <ProductDetailPage id={params.id} />}
      </Route>
      <Route component={NotFound}></Route>
    </Switch>
    </>
  )
}
