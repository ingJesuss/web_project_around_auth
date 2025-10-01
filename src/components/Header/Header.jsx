import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.jpg";
import closeIcon from "../../images/CloseIcon.jpg";

const Header = ({ isLoggedIn, userEmail, handleLogout }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Contenedor principal del header */}
      <div className="header__container">
        {/* Menú desplegable móvil - aparece ARRIBA del logo */}
        {isLoggedIn && isMenuOpen && (
          <div className="header__mobile-menu">
            <p className="header__mobile-email">{userEmail}</p>
            <button onClick={handleLogout} className="header__mobile-logout">
              Cerrar sesión
            </button>
          </div>
        )}

        {/* Contenedor del logo y botones */}
        <div className="header__logo-container">
          <img
            src={logo}
            alt="logo the Around the U.S."
            className="header__logo"
          />

          {/* Menú hamburguesa - solo visible cuando está logueado y cerrado */}
          {isLoggedIn && !isMenuOpen && (
            <button
              className="header__menu-btn"
              onClick={toggleMenu}
              aria-label="Menú"
            >
              <span className="header__menu-line"></span>
              <span className="header__menu-line"></span>
              <span className="header__menu-line"></span>
            </button>
          )}

          {/* Botón de cerrar - solo visible cuando el menú está abierto */}
          {isLoggedIn && isMenuOpen && (
            <button
              className="header__close-btn"
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              <img
                src={closeIcon}
                alt="Cerrar"
                className="header__close-icon"
              />
            </button>
          )}

          {/* Enlaces para usuarios NO logueados en móvil */}
          {!isLoggedIn && (
            <div className="header__mobile-auth">
              {location.pathname === "/signin" && (
                <Link to="/signup" className="header__mobile-link">
                  Regístrate
                </Link>
              )}
              {location.pathname === "/signup" && (
                <Link to="/signin" className="header__mobile-link">
                  Inicia sesión
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Menú para desktop */}
        <div className="header__auth">
          {isLoggedIn ? (
            <>
              <p className="header__email">{userEmail}</p>
              <button onClick={handleLogout} className="header__logout">
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              {location.pathname === "/signin" && (
                <Link to="/signup" className="header__link">
                  Regístrate
                </Link>
              )}
              {location.pathname === "/signup" && (
                <Link to="/signin" className="header__link">
                  Inicia sesión
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
