import { useContext } from "react"
import TemaContext from "../../contexts/TemaContext"

const TemaBoton = () => {
    const {tema,cambiarTema}=useContext(TemaContext)
    return (
    <button onClick={cambiarTema}>Cambiar a tema {tema === "claro" ? "oscuro" : "claro"}</button>
  )
}

export default TemaBoton