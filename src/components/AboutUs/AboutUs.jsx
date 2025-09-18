import './AboutUS.css'
import { Outlet, Link } from 'react-router-dom'

const AboutUS = () => {
  return (
    <div className="about-us">

      <ul className="links">
        <li>
          <Link to={"History"}>nuestra historia</Link>
        </li>
        <li>
          <Link to={"Mision"} > nuestra mision</Link>
        </li>
      </ul>

      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <Outlet/>
    </div>
  )
}

export default AboutUS