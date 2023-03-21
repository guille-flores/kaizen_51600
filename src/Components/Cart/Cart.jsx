import { Button, Grid, Stack } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


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

    return (
        <Grid container spacing={2} p={5}>
            <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                {
                    cart.map((elemento)=>{
                        return(
                            <Item>
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
                <Button variant="contained" onClick={clearCart}>Vaciar Carrito</Button>
            </Grid>
        </Grid>
    )
}

export default Cart