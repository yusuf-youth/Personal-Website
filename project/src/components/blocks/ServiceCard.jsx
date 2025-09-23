import React from "react";

const ServiceCard = ({ imageSrc, imageAlt, title, children }) => {
  return (
    <article className="what-i-offer__card service-card">
      <img className="service-card__image" src={imageSrc} alt={imageAlt} />
      <h3 className="service-card__title h4">{title}</h3>
      <div className="service-card__description">{children}</div>
    </article>
  );
};

export default ServiceCard;
