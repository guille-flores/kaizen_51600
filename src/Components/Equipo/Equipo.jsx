import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';

import { useState, useEffect } from 'react';
import { equipo } from "../../equipoMock.js"
import { Link } from 'react-router-dom';

function Equipo({category}) {
    const filtTeam = equipo.filter((x)=>x.category.toUpperCase() === String(category).toUpperCase())

    const [members, setMembers] = useState([])
    useEffect(()=>{
        console.log(category, members)
        const membersList = new Promise((resolve, reject)=>{
            resolve(category ? filtTeam : equipo)
        })

        membersList
            .then((res)=>{setMembers(res)})
            .catch((e)=>console.log(e))
    }, [category])

    return (
        <Box  m={1}>
            <Grid container spacing={2}>
                {
                    members.map((ind)=>{
                        return (
                            <Grid item xs={12} md={4}>
                                <Card id={ind.id}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        image={ind.img}
                                        alt="green iguana"
                                        height="100%"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {ind.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" height={20}>
                                            {ind.preview}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link to={`/equipo/detalles/${ind.id}`}>
                                            <Button size="small" color="primary">
                                                Leer más
                                            </Button>
                                        </Link>
                                        <Link to={`/servicios/${ind.category}`}>
                                            <Button size="small" color="primary">
                                                {ind.category}
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
            
    );
}

export default Equipo

