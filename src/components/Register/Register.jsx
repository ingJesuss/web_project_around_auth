import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password });
    // La función onRegister se pasará desde App.js
    // para manejar la lógica de registro.
  }

  return (
    <div className="login">
      {" "}
      {/* Reutilizamos la clase del bloque 'login' */}
      <h2 className="login__title">Regístrate</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
          required
        />
        <button className="login__button" type="submit">
          Regístrate
        </button>
      </form>
      <div className="login__signin">
        <p>
          ¿Ya eres miembro?{" "}
          <Link to="/signin" className="login__link">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
