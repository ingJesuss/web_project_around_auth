import { useContext } from "react"
import IdiomaContext from "../../contexts/IdiomaContext"
const IdiomaBoton = () => {
    const {idioma,cambiarIdioma,textos}=useContext(IdiomaContext);
  return (
    <button onClick={cambiarIdioma} > {textos[idioma].cambiar}</button>
  )
}

export default IdiomaBoton