import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

import { Link } from 'react-router-dom';

const Item = ({item}) => {
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
                  {item.price}
              </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
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
      </Card>
    </Grid>
  )
}

export default Item