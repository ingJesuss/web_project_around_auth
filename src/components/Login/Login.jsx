import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
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
    // Aquí llamarías a la función onLogin que viene de las props,
    // pasando el email y la contraseña.
    onLogin({ email, password });
  }

  return (
    <div className="login">
      <h2 className="login__title">Inicia sesión</h2>
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
          Inicia sesión
        </button>
      </form>
      <div className="login__register">
        <p>
          ¿Aun no eres miembro?{" "}
          <Link to="/signup" className="login__link">
            Registrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
