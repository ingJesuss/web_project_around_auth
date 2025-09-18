import { Link } from "react-router-dom";
import errorPage from "../PageNotFound/errorPage.png" 
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found">
        <h3 className="not-found__title"></h3>
        <img src={errorPage} alt="pagina no enconttrada" />
        <span>404</span>
        <p className="not-found__text">No hay contenido</p>

        <Link to={"/"}>Volver</Link>



    </div>
  )
}

export default PageNotFound