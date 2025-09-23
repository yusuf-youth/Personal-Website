import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../script/translation";

function SwitchButton({ label = "UA" }) {
  const { language, toggleLanguage } = useLanguage();
  const text = translations[language].switchButton;
  const checked = language === "UA";

  const handleChange = (e) => {
    toggleLanguage(e.target.checked);
  };

  return (
    <div className="hero__switch-button switch-button" tabIndex="1">
      <label
        className="switch-button__container"
        title={text.accessibilityText}
      >
        <span className="visually-hidden">{text.accessibilityText}</span>
        <input
          type="checkbox"
          className="switch-button__input"
          checked={checked}
          onChange={handleChange}
        />
        <span className="switch-button__track">
          <span className="switch-button__knob"></span>
        </span>
      </label>
      <span className="switch-button__label">{text.label}</span>
    </div>
  );
}

export default SwitchButton;
