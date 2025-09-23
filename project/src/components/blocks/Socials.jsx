import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Socials = ({ socials = [] }) => {
  const { language } = useLanguage();

  if (!socials.length) return null;

  return (
    <div className="hero__socials socials">
      <ul className="socials__list">
        {socials.map((social, index) => (
          <li key={index} className="socials__item">
            <a
              className="socials__link"
              href={social.url}
              title={social.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="visually-hidden">{social.name}</span>
              <img
                className="socials__image"
                src={social.iconSrc}
                alt={social.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
