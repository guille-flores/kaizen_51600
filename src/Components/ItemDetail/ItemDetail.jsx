import { Button, Grid, Stack, Box} from "@mui/material"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ClipLoader } from "react-spinners";


const ItemDetail = ({productSelected, substractItem, add2cart, sumItem, cantidad}) => {
    
    if(Object.keys(productSelected).length === 0 ){
        return (
            <Box sx={{
                width: '100vw',
                height: '100vh'
                }}>
                <ClipLoader
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    color="green"
                />
            </Box>
        )
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
                        title={productSelected.title}
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

export default ItemDetail