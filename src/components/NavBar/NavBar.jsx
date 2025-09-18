import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UsuarioContext from "../../contexts/Usuariocontext";
import './NavBar.css';

const customClassName = ({isActive}) => "menu__link" + (isActive ? "menu__link_avtive" : "");


const NavBar = () => {

  const usuario = useContext(UsuarioContext);


  return (
    
    <nav className="menu">
      <NavLink to="/" className={customClassName} >Inicio</NavLink>
      <NavLink to="/reviews" className={customClassName}>Reseñas de emojis</NavLink>
      <NavLink to="/about-me" className={customClassName}>Sobre mí</NavLink>
      <NavLink to="/about-us" className={customClassName}>Sobre nosotross</NavLink>
      <span>  {usuario} </span>
    </nav>
  )
}

export default NavBar