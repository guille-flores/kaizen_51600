import ItemCount from "../ItemCount/ItemCount"

const Cart = () => {
    const onAdd = (cantidad)=>{
        console.log(`se agregó al carrito ${cantidad} elementos`)
        console.log("se agregó al carrito "+ cantidad + " elementos")
      }
      let stock = 5
      let initial = 1
    
    return (
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
    )
}

export default Cart