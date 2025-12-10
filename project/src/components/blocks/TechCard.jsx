import React from "react";

const TechCard = ({ imageSrc, alt, label, modifierClass = "", delay }) => {
  return (
    <article
      className={`technologies__card tech-card ${modifierClass}`}
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="tech-card__image-wrapper">
        <img
          className="tech-card__image"
          src={imageSrc}
          alt={alt}
          width={125}
          height={125}
          loading="lazy"
        />
      </div>
      <span className="tech-card__label">{label}</span>
    </article>
  );
};

export default TechCard;
