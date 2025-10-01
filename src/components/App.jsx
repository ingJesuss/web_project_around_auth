import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import InfoTooltip from "./InfoTooltip/InfoTooltip";
import { register, authorize, checkToken } from "../utils/auth";
import { api } from "../utils/api";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState("");
  const [tooltipMsg, setTooltipMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setUserEmail(res.data.email);
            navigate("/", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate]);

  //registro

  const handleRegister = ({ email, password }) => {
    register( email, password )
      .then((res) => {
        if (res) {
          setIsInfoTooltipOpen(true);
          setTooltipStatus("success");
          setTooltipMsg("Registro exitoso!");
          navigate("/signin", { replace: true });
        }
      })
      .catch((err) => {
        setTooltipStatus("error");
        setTooltipMsg("Registro fallido, intentalo nuevamente");
        setIsInfoTooltipOpen(true);
        console.error("Error de registro:", err);
      });
  };

  //login

  const handleLogin = ({ email, password }) => {
    authorize( email, password )
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          setUserEmail(email);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        setTooltipStatus("error");
        setTooltipMsg("Uy, algo salio mal. Por favor intentalo nuevamente");
        setIsInfoTooltipOpen(true);
        console.error("Error de inicio de sesión:", err);
      });
  };

  //logout
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserEmail("");
    navigate("/signin", { replace: true });
  };

  /* Popup */
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
    setIsInfoTooltipOpen(false);
  }

  /* cards */
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      api.getInitialCards().then((res) => {
        setCards(res);
      });
    }
  }, [isLoggedIn]);

  /* manejador de like */
  async function handleCardLike(cardId) {
    const card = cards.find((c) => c._id === cardId);

    try {
      let updateCard;
      if (card.isLiked) {
        updateCard = await api.deleteLikeCard(cardId);
      } else {
        updateCard = await api.putLikeCard(cardId);
      }
      setCards((prevCards) =>
        prevCards.map((c) => (c._id === cardId ? updateCard : c))
      );
    } catch (err) {
      console.error(err);
    }
  }

  /* manejador de eliminacion de cartas */
  async function handleCardDelete(cardId) {
    try {
      await api.deleteCard(cardId);
      setCards((prevCards) => prevCards.filter((card) => card._id != cardId));
    } catch (err) {
      console.error("Error al borrar la card:", err);
    }
  }

  const handleAddPlaceSubmit = async (data) => {
    try {
      const newCard = await api.postNewCard(data);
      setCards([newCard, ...cards]);
      handleClosePopup();
    } catch (err) {
      console.error("Error al cargar imagen", err);
    }
  };

  /* usuario */
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLoggedIn]);

  const handleUpdateUser = async (data) => {
    try {
      const updateUser = await api.patchEditProfile(data);
      setCurrentUser(updateUser);
      handleClosePopup();
    } catch (err) {
      console.error("Error al actualizar usuario", err);
    }
  };

  /* edit-avatar */

  const handleUpdateAvatar = async (avatarUrl) => {
    try {
      const updateUser = await api.setUserAvatar({ avatar: avatarUrl });
      setCurrentUser(updateUser);
      handleClosePopup();
    } catch (err) {
      console.error("Error al actualizar avatar", err);
    }
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        <Header
          isLoggedIn={isLoggedIn}
          userEmail={userEmail}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Main
                  handleOpenPopup={handleOpenPopup}
                  handleClosePopup={handleClosePopup}
                  cards={cards}
                  popup={popup}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  onAddPlaceSubmit={handleAddPlaceSubmit}
                />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={handleClosePopup}
          status={tooltipStatus}
          message={tooltipMsg}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
