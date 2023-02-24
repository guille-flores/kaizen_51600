import {Grid} from '@mui/material'

const ItemListContainer = ({greeting}) => {
  return (
    <Grid item>
      <h1> {greeting} </h1>
    </Grid>
    
  )
}

export default ItemListContainer