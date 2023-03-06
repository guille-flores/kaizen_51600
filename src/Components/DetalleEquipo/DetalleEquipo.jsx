import { useParams } from "react-router-dom"
import { equipo } from "../../equipoMock"


const DetalleEquipo = () => {
    const { id } = useParams()
    const equipoSelected = equipo.find( (n)=> String(n.id) === String(id))
    return (
        <div>
            <h1>{equipoSelected.name}</h1>
            <p>
                {equipoSelected.description}
            </p>
        </div>
    )
}

export default DetalleEquipo