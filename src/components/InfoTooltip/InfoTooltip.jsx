import React from "react";
import successIcon from "../../images/success-icon.jpg";
import errorIcon from "../../images/error-icon.jpg";
import closeIcon from "../../images/CloseIcon.jpg";

const InfoTooltip = ({ isOpen, onClose, status, message }) => {
  const icon = status === "success" ? successIcon : errorIcon;

  return (
    // Se añade la clase 'infotooltip_opened' cuando 'isOpen' es true
    <div className={`infotooltip ${isOpen ? "infotooltip_opened" : ""}`}>
      <div className="infotooltip__container">
        <button
          type="button"
          className="infotooltip__close-button"
          onClick={onClose}
        >
          <img
            src={closeIcon}
            alt="Cerrar"
            className="infotooltip__close-icon"
          />
        </button>
        <img src={icon} alt={status} className="infotooltip__icon" />
        <p className="infotooltip__message">{message}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;
