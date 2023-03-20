import { Button } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const Cart = () => {    
    const {cart, clearCart, totalPrice} = useContext(CartContext)
    const total = totalPrice()
   

    return (
        <div>
            {
                cart.map((elemento)=>{
                    return(
                        <div>
                            <h2>{elemento.producto.title}</h2>
                            <h2>{elemento.cantidad}</h2>
                        </div>
                    )
                })
            }
            <h3>Total: {total}</h3>
            <Button variant="contained" onClick={clearCart}>Vaciar Carrito</Button>
        </div>
    )
}

export default Cart