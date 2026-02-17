import { useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeItem } from "../features/cartSlice"
import { useSelector } from "react-redux"

function Cart(){
    const cartItems= useSelector(
        (state)=> state.cart.cartItems
    )
    const dispatch= useDispatch()
    const total= cartItems.reduce(
        (sum, item)=> sum+(item.price *item.quantity),0
    )
    return (
        <div>
            <h1>Cart</h1>
            {cartItems.map((item)=>(
                <div key={item.id}>
                    {item.name} x {item.quantity}
                    <button onClick={()=> dispatch(increaseQuantity(item.id))}>+</button>
                    <button onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>
                    <button onClick={()=> dispatch(removeItem(item.id))}>Remove</button>
                </div>
            ))}
            <h2>Total: Rs{total}</h2>
        </div>
    )
}
export default Cart
