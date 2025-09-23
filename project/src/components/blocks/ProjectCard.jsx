import React from "react";
import References from "./References";

const ProjectCard = ({
  title,
  label,
  imageSrc,
  alt,
  imgTitle = "",
  modifierClass = "",
  links = [],
}) => {
  return (
    <article className={`projects__card project-card ${modifierClass}`}>
      <img
        className="project-card__image"
        src={imageSrc}
        alt={alt}
        title={imgTitle}
      />
      <div className="project-card__body">
        <span className="project-card__label">{label}</span>
        <h3 className="project-card__title h4">{title}</h3>
        <References links={links} />
      </div>
    </article>
  );
};

export default ProjectCard;
