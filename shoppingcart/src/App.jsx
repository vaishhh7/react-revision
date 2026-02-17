import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App(){
  return (
    <div
    className="max-w-3xl mx-auto">
    <ProductList/>
    <Cart/>
    </div>
  )
}
export default App