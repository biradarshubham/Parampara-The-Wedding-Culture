import { Context } from './contexts/Context'
import {ProductContext} from './contexts/ProductContext'
import Main from './Main/Main'

const App = () => {
  return (
    <Context>
    <ProductContext>
    <Main/>
    </ProductContext>
    </Context>
  )
}

export default App
