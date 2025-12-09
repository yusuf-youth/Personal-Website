import React from "react";

const ServiceCard = ({
  imageSrc,
  imageAlt,
  title,
  highlightedText,
  children,
}) => {
  function getModifierClass() {
    let modifier = "";

    if (highlightedText === "HTML") {
      return (modifier = "is-html");
    }

    if (highlightedText === "SCSS") {
      return (modifier = "is-scss");
    }

    if (highlightedText === "JavaScript") {
      return (modifier = "is-js");
    }

    if (highlightedText === "React") {
      return (modifier = "is-react");
    }

    if (highlightedText === "Structure" || highlightedText === "структура") {
      return (modifier = "is-structure");
    }
  }

  return (
    <article className="what-i-offer__card service-card">
      <img
        className="service-card__image"
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
      />
      <h3 className="service-card__title h4">
        {title}{" "}
        <span
          className={`service-card__highlighted-text ${getModifierClass()}`}
        >
          {highlightedText}
        </span>
      </h3>
      <div className="service-card__description">{children}</div>
    </article>
  );
};

export default ServiceCard;
