import { createContext, useState } from "react"


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const agregarAlCarrito = (producto, cantidad) => {
        let existProduct = alreadyInCart(producto)
        
        if (existProduct){
            let modQuantity = cart.map((item)=>{
                if (item.producto.id === producto.id && item.cantidad + cantidad <= item.producto.stock){
                    return {
                        ...item,
                        cantidad: item.cantidad + cantidad
                    }   
                }else{
                    return item
                }
            })
            setCart(modQuantity)
        }else{
            setCart([...cart, {producto: producto, cantidad: cantidad}])
        }
    }
    
    const alreadyInCart = (producto) => {
        return cart.some((elemento) => elemento.producto.id === producto.id)
    }
    
    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        let total = cart.reduce((accumulador, elemento) => {
            return accumulador + elemento.cantidad*elemento.producto.price
        }, 0)
        return total
    }
    

    let data = {
        cart,
        agregarAlCarrito,
        clearCart,
        totalPrice
    }

    return (
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider