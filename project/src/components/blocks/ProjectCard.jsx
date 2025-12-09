import React, { useRef, useState } from "react";
import References from "./References";

const ProjectCard = ({
  title,
  label,
  videoSrc,
  modifierClass = "",
  links = [],
}) => {
  const videoRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play();
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    videoRef.current?.pause();
  };

  return (
    <article className={`projects__card project-card ${modifierClass}`}>
      <video
        className={`project-card__video ${isHovering ? "is-hovered" : ""}`}
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        loading="lazy"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      ></video>
      <div className="project-card__body">
        <span className="project-card__label">{label}</span>
        <h3 className="project-card__title h4">{title}</h3>
        <References links={links} />
      </div>
    </article>
  );
};

export default ProjectCard;
