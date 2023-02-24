import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Grid} from '@mui/material'

const CartWidget = ({colnum=1}) => {
  return (
    <Grid item xs={{colnum}} sx={{ display: { sm: 'block', xs: 'none' } }}>
      <a class="nav-item nav-link" href="#">
        <ShoppingCartIcon sx={{ fontSize: 40 }}/>
      </a>
    </Grid>
  )
}

export default CartWidget