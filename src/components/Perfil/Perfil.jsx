import { useContext,useCallback } from "react"
import UsuarioContext from "../../contexts/Usuariocontext"

const Perfil = () => {
    const usuario = useContext(UsuarioContext);
    const saludar = useCallback(()=> {
      console.log(`hola, ${usuario}`)
    },[usuario])

  return (
    <div>
        <h2>Usuario</h2>
        <p>{usuario}</p>
        <button onClick={saludar}>Saludar</button>
    </div>
  )
}

export default Perfil