import { Button, Grid, Stack } from "@mui/material"
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormCheckout from "../FormCheckout/FormCheckout";


const Cart = () => {    
    const {cart, clearCart, totalPrice, deleteProduct} = useContext(CartContext)
    const total = totalPrice()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
      }));

      const [showForm, setShowForm] = useState(false)

      if (showForm) {
        return (
            <Grid container spacing={2} p={5}>
                <FormCheckout cart={cart} total={total} clearCart={clearCart}/>
            </Grid>
        )
      }else{
          return (
              <div>
                  {cart.length === 0 ? (
                        <Grid sx={{display:"flex", justifyContent:"center"}} container spacing={2} p={5}>
                            <Grid item xs={12}>
                                <img src="https://res.cloudinary.com/dzwh2f6qy/image/upload/v1679879203/undraw_empty_cart_co35_jik7e9.svg" alt="Empty Cart" height={"500vh"}/>
                            </Grid>
                            <Grid item xs={12}>
                                <h2>Tu carrito está vacío, por favor selecciona al menos un producto para poder proseguir.</h2>
                            </Grid>
                        </Grid> 
                      ):(                
                          <Grid container spacing={2} p={5}>
                              <Grid item xs={12} md={6}>
                                  <Stack spacing={2}>
                                  {
                                      cart.map((elemento)=>{
                                          return(
                                              <Item key={elemento.producto.id}>
                                                  <Stack direction={{ xs: "column", md: "row"}} spacing={2} justifyContent="space-around" alignItems="center">
                                                      <img src={elemento.producto.img} alt={elemento.producto.title} width="150"/>
                                                      <span>{elemento.producto.title}</span>
                                                      <span>Precio Unitario: {elemento.producto.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
                                                      <p>Unidades: {elemento.cantidad}</p>
                                                      <Button color='secondary' variant="outlined" onClick={()=> deleteProduct(elemento)}>Eliminar</Button>
                                                  </Stack>
                                              </Item>
                                          )
                                      })
                                  }
                                  </Stack>
                              </Grid>
                              <Grid item xs={12} md={6} textAlign='center'>
                                  <h3>Total: {total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</h3>
                                  <Button variant="contained" onClick={() => {setShowForm(true)}}>Terminar Compra</Button>
                                  <Button variant="contained" onClick={clearCart}>Vaciar Carrito</Button>
                              </Grid>
                          </Grid>
                      )}
              </div>
          )
      }
}

export default Cart