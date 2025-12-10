import { useRef, useState } from "react";
import References from "./References";

const ProjectCard = ({
  title,
  label,
  videoSrc,
  poster,
  modifierClass = "",
  delay,
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
    <div data-aos="zoom-out" data-aos-delay={delay}>
      <article className={`projects__card project-card ${modifierClass}`}>
        <video
          className={`project-card__video ${isHovering ? "is-hovered" : ""}`}
          ref={videoRef}
          src={videoSrc}
          poster={poster}
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
    </div>
  );
};

export default ProjectCard;
