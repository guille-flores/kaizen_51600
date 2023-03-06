import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Grid} from '@mui/material'
import { Link } from "react-router-dom"

const CartWidget = ({colnum=1}) => {
  return (
    <Link to="/cart">
      <Grid item sm={colnum} sx={{ display: { sm: 'block', xs: 'none' } }}>
          <ShoppingCartIcon sx={{ fontSize: 40 }}/>
      </Grid>
    </Link>
  )
}

export default CartWidget