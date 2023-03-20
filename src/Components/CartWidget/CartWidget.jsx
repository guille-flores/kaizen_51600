import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Grid} from '@mui/material'
import { useContext } from 'react';
import { Link } from "react-router-dom"
import { CartContext } from '../Context/CartContext';

const CartWidget = ({colnum=1}) => {
  const {cart} = useContext(CartContext)
  const totalItems = cart.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0);

  return (
    <Link to="/cart">
      <Grid item sm={colnum} sx={{ display: { sm: 'block', xs: 'none' } }}>
          <span>{totalItems}</span>
          <ShoppingCartIcon sx={{ fontSize: 40 }}/>
      </Grid>
    </Link>
  )
}

export default CartWidget