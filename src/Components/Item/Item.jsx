import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';




const Item = ({item}) => {
  const [cantidad, setCantidad] = useState(0)
  const { cart, agregarAlCarrito } = useContext(CartContext)

  const sumItem = (item) => {
    let matchItem = cart.find( producto=> producto.producto.id === item.id)
    let itemQuantity = matchItem ? matchItem.cantidad : 0
    if(cantidad + itemQuantity < item.stock){
      setCantidad(cantidad+1)
    }else{
      Swal.fire({
          icon: 'error',
          title: 'Lo sentimos, parece que no quedan más ' + item.title + ' disponibles.',
          showConfirmButton: false,
          timer: 4500
        })
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
    <Grid item xs={12} md={4}>  
      <Card id={item.id}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="500"
            width="100%"
            image={item.img}
            alt="green iguana"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                  {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  {item.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
              </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to={`/item/${item.id}`}>
                <Button size="small" color="primary">
                  Leer más
                </Button>
            </Link>
            <Link to={`/category/${item.category}`}>
                <Button size="small" color="primary">
                  {item.category}
                </Button>
            </Link>
        </CardActions>
        <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Button size="small" color="primary" variant="outlined" onClick={() => sumItem(item)}>
              +
            </Button>
            <p>
              {cantidad}
            </p>
            <Button size="small" color="primary" variant="outlined" onClick={substractItem}>
              -
            </Button>
            <Button size="small" color="primary" variant="contained" sx={{left:4}} onClick={() => add2cart(item, cantidad)}>
              Agregar al carrito
            </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Item