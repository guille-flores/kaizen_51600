
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Equipo from '../Equipo/Equipo';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { servicios } from '../../serviciosMock';
import { Fragment, useEffect, useState } from 'react';

const Servicios = () => {

    const { category } = useParams()

    const filtService = servicios.filter((x)=>x.category.toUpperCase() === String(category).toUpperCase())

    const [service, setService] = useState([])
    useEffect(()=>{
        console.log(category, service)
        const serviceList = new Promise((resolve, reject)=>{
            resolve(category ? filtService : servicios)
        })

        serviceList
            .then((res)=>{setService(res)})
            .catch((e)=>console.log(e))
    }, [category])

    



    return (
        <Box sx={{ minWidth: 275 }}>
            <Grid container spacing={2}>
                {
                    service.map((service)=>{
                        return (
                            <Grid item xs={12}>
                                <Fragment>
                                    <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {service.fonetica}
                                    </Typography>
                                    <Typography variant="body2">
                                        {service.description}
                                    </Typography>
                                    </CardContent>
                                </Fragment>
                            </Grid>
                        )
                    })
                    
                }
            </Grid>
            <Box sx={{backgroundColor:'#FFFAF0', border: 1, padding: 4}}>
                <h1>¡Conoce al equipo!</h1>
                <h2>Ellos cuentan con experiencia en el servicio seleccionado:</h2>
                <Equipo category={category}/>
            </Box>
        </Box>
    )
}

export default Servicios