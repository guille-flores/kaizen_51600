import { addDoc, collection, updateDoc, doc } from "@firebase/firestore"
import { Grid, Button } from "@mui/material"
import { useState } from "react"
import { db } from "../../firebaseConfig"
import Swal from 'sweetalert2'

const FormCheckout = ({cart, total, clearCart}) => {

    const [userData, setUserData] = useState({
        name:"",
        apellido:"",
        email:"",
        phone:"",
        direccion: ""
    })

    const handleSumbit = (e) => {
        e.preventDefault()
        const currentdate = new Date()
        let order = {
            buyer: userData,
            items: cart,
            total: total,
            date: currentdate
        }
        let orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
            .then((res) => {
                cart.map((producto) => {
                    let refDoc = doc(db, "products", producto.producto.id)
                    updateDoc(refDoc, {stock: producto.producto.stock - producto.cantidad})
                })
                Swal.fire({
                    title: '¡Se ha generado su orden de compra!\nEl número es: '+ res.id,
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  }).then((result) => {
                    if(result.isConfirmed){
                        window.location.reload()
                    }
                  })
                
                
            })
            .catch(e => console.log(e))
    }
    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value})
    }

  return (
    <div>
         <form action="" onSubmit={handleSumbit}>
            <Grid container spacing={3} sx={{ p: 2 }} align="center">
                <input type="text" placeholder="Nombre(s)" name="nombre" size={70} pattern=".{2,}$" required onChange={handleChange}  title="Ingresa tu nombre o nombres. Debe tener una longitud mayor a 2 caracteres."/>
                <input type="text" placeholder="Apellido(s)" name="apellido" size={70} onChange={handleChange}/>
                <input type="text" placeholder="Teléfono" name="phone" pattern="^\d{10}$" size={70} onChange={handleChange} title="Ingrese su número telefónico de 10 dígitos (sin guiiones, signo de + o cualquier otro que no sea un número)."/>
                <input type="text" placeholder="email@gmail.com" pattern="^[\S]+@[\S]+\.com$" size={70} name="email" required onChange={handleChange} title="Ingrese su email. Debe tener obligatoriamente el caracter '@' y terminar en '.com'."/>
                <input type="text" placeholder="Dirección" name="direccion" required size={70} onChange={handleChange}/>
                <Button variant="contained" type="submit">Enviar</Button>
                
            </Grid>
        </form>
    </div>
  )
}

export default FormCheckout