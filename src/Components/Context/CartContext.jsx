import { createContext, useState } from "react"
import Swal from 'sweetalert2'

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
        Swal.fire({
            title: '¿Seguro que deseas eliminar todos los productos?',
            text: "No podrás revertir este cambio.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, vaciar carrito!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
                Swal.fire(
                    '¡Vaciado!',
                    'Todos los productos se han eliminado y el carrito está vacío.',
                    'success'
                )
            }
          })
    }

    const deleteProduct = (producto) => {
        Swal.fire({
            title: '¿Seguro que deseas eliminar este producto del carrito?',
            text: producto.producto.title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminar producto!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                const newCart = cart.filter((element) => element.producto.id !== producto.producto.id)
                setCart(newCart)
                Swal.fire(
                    '¡Producto eliminado!',
                    'El producto '+ producto.producto.title +  ' ha sido eliminado del carrito.',
                    'success'
                )
            }
        })
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
        totalPrice,
        deleteProduct
    }

    return (
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider