import { Grid } from "@mui/material"
import { useParams } from "react-router-dom"
import { products } from "../../productsMock"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const productSelected = products.find((n)=> String(n.id) === String(id)) 

    return (
        <Grid container>
            <Grid item>
                {productSelected.title}
            </Grid>
        </Grid>
    )
}

export default ItemDetailContainer