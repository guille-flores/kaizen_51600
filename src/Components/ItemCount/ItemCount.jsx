import { useState } from "react"

const ItemCount = ( {stock, initial, onAdd} ) => {

    // desestructuramos la variable de estado como la variable y una funcion (set{nombre variable})
    const [counter, setCounter]= useState(initial)
    
    const sumar = () => {
        if(counter < stock){
            setCounter(counter+1)
        }else{
            console.log("No hay más producto en stock")
        }
    }
    const restar = () => {
        setCounter(counter-1)
    }

    return (
        <div>
            <h1>Item Count: {counter}</h1>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={ ()=> onAdd(counter)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount