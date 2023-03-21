import { Button, Grid, Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import { products } from "../../productsMock"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';




const ItemDetailContainer = () => {
    const { id } = useParams()
    const productSelected = products.find((n)=> String(n.id) === String(id)) 


    const [cantidad, setCantidad] = useState(0)
    const { cart, agregarAlCarrito } = useContext(CartContext)

    const sumItem = (item) => {
        let matchItem = cart.find( producto=> producto.producto.id === item.id)
        let itemQuantity = matchItem ? matchItem.cantidad : 0
        if(cantidad + itemQuantity < item.stock){
            setCantidad(cantidad+1)
        }
    }

    const substractItem = () => {
        if(cantidad>0){
        setCantidad(cantidad-1)
        }
    }

    const add2cart = (item, cantidad) => {
        if(cantidad === 0 && item.stock>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes agregar al menos una unidad de ' + item.title + '.'
        })
        }else if(item.stock === 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo sentimos, por el momento no tenemos más ' + item.title + ' disponibles.'
        })
        }else if(item.stock>0){
        Swal.fire({
            title: 'Agregar ' + cantidad + ' ' + item.title + ' al carrito?',
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: 'red',
            confirmButtonColor: 'green'
        }).then((result) => {
            if (result.isConfirmed) {
            agregarAlCarrito(item, cantidad)
            Swal.fire('¡Agregado!', '', 'success')
            setCantidad(0)
            } else if (result.isDenied) {
            Swal.fire('Hubo un error. Inténtelo nuevamente.', '', 'info')
            }
        })
        }
    }

    return (
        <Grid container spacing={3} p={3} alignItems="center" justifyContent="center">
            <Grid item sm={6} xs={12}>
                <h1>
                    {productSelected.title}
                </h1>

                <Card p={5}>
                    <CardMedia
                        sx={{ height:"50vh"}}
                        image={productSelected.img}
                        title="green iguana"
                    />
                </Card>

            </Grid>
            <Grid item sm={6} xs={12}>
                <p align="justify">
                    {productSelected.description}
                </p>
                <h2 align="center">
                    {productSelected.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
                </h2>
                <div align="center" sx={{margin:5}}>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <Button size="small" color="primary" variant="outlined" onClick={() => sumItem(productSelected)}>
                        +
                        </Button>
                        <p>
                        {cantidad}
                        </p>
                        <Button size="small" color="primary" variant="outlined" onClick={substractItem}>
                        -
                        </Button>
                    </Stack>
                    <Button size="small" color="primary" variant="contained" sx={{left:4}} onClick={() => add2cart(productSelected, cantidad)}>
                        Agregar al carrito
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default ItemDetailContainer