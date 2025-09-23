import React from "react";

const TechCard = ({ imageSrc, alt, label, modifierClass = "" }) => {
  return (
    <article className={`technologies__card tech-card ${modifierClass}`}>
      <div className="tech-card__image-wrapper">
        <img
          className="tech-card__image"
          src={imageSrc}
          alt={alt}
          width={125}
          height={125}
        />
      </div>
      <span className="tech-card__label">{label}</span>
    </article>
  );
};

export default TechCard;
