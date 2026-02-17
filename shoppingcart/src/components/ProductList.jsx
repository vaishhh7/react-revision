import {useDispatch} from "react-redux"
import { addToCart } from "../features/cartSlice"
function ProductList(){
    const dispatch = useDispatch()
    const products=[
        {id:1 , name: "t-shirt", price:699},
        {id:2 , name: "dress", price:899},
        
    ]
    return (
        <div>
            <h1> Products</h1>
            {products.map((p)=>(
                <div key={p.id}>
                    {p.name} Rs{p.price}
                    <button onClick={()=> dispatch(addToCart(p))}>
                        Add To Cart
                    </button>
                    </div>

            ))}
        </div>
    )
}
export default ProductList