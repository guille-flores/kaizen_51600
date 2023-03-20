import { Grid, Button } from "@mui/material"
import { useState } from "react"


const Contacto = () => {

    const [userData, setUserData] = useState({nombre:"", apellido:"", email:""})

    const handleSubmit = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    return (
        <form action="">
        <Grid container spacing={3} sx={{ p: 2 }} align="center">
            <Grid item xs={12} md={4}>
                <input type="text" placeholder="Nombre(s)" name="nombre" size={70} pattern=".{2,}$" required onChange={handleSubmit}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <input type="text" placeholder="Apellido(s)" name="apellido" size={70} onChange={handleSubmit}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <input type="email" placeholder="email@gmail.com" pattern="^[\S]+@[\S]+\.com$" size={70} name="email" required onChange={handleSubmit}/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" type="submit">Enviar</Button>
            </Grid>
        </Grid>
        </form>
    )
}

export default Contacto