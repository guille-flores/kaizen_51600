import { Grid, Box } from '@mui/material';
import Item from '../Item/Item';


const ItemList = ({items }) => {
  return (
    <Box m={1} p={2}>
      <Grid container spacing={2}>
        {
          items.map((item)=>{
            return <Item item={item}/>
          })
        }
      </Grid> 
    </Box>
  )
}

export default ItemList