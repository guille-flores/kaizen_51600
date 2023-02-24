import {Box, Grid, Stack, Button, Select, Typography} from '@mui/material'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
        <Box
            sx={{
                    width: "100%",
                    backgroundColor: "white"
                }}
        >
            
            <Grid container spacing={2} border={2} sx={{backgroundColor: "#81c784"}}>
                <Grid item xs={12}>
                    <h1 align={'center'}>
                        Clínica Kaizen
                    </h1>
                </Grid> 
                <Grid item xs={12} sm={1} align={'center'}>
                    <img 
                        src="data:image/png;base64,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" 
                        width="100%" 
                        alt=""
                    />
                </Grid>
                
                <Grid item sx={{ display: { sm: 'block', xs: 'none' }  }} xs={10} align={'center'}>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <Button md={3} variant="text" href="#" fullWidth="true">Nosotros</Button>
                        <Button md={3} variant="text" href="#" fullWidth="true">Servicios</Button>
                        <Button md={3} variant="text" href="#" fullWidth="true">Ubicaciones</Button>
                        <Button md={3} variant="text" href="#" fullWidth="true">Nuestro Equipo</Button>
                    </Stack>
                </Grid>
    
                <Grid item sx={{ display: { xs: 'inline', sm: 'none' }}} direction="column" xs={12}>
                    <Select style={{minHeight: '20px', width:'80%'}} alignItems="center" justifyContent="center">
                        <Button variant="text" href="#" fullWidth="true">Nosotros</Button>
                        <Button variant="text" href="#" fullWidth="true">Servicios</Button>
                        <Button variant="text" href="#" fullWidth="true">Ubicaciones</Button>
                        <Button variant="text" href="#" fullWidth="true">Nuestro Equipo</Button>
                    </Select>
                </Grid>
    
                <CartWidget colnum="1"/>
            </Grid>
        </Box>
    )
}

export default Navbar
