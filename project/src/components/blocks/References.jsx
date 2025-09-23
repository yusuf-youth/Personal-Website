import React from "react";

const References = ({ links = [] }) => {
  if (!links.length) return null;

  return (
    <div className="project-card__references references">
      <ul className="references__list">
        {links.map((link, index) => (
          <li key={index} className="references__item">
            <a
              className={`references__link ${
                link.type === "live"
                  ? "link--invert button button--dark"
                  : "button button--dark-bordered"
              }`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
