import { useState, useEffect } from "react";
import { FLOATING_NAV_ITEMS } from "../../script/constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../script/translation";

const FloatingNav = () => {
  const { language } = useLanguage();
  const text = translations[language].floatingNav;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionElements = FLOATING_NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionElements.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleClick = (e, href, index) => {
    e.preventDefault();
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <nav className="floating-nav">
      <ul className="floating-nav__list">
        {FLOATING_NAV_ITEMS.map((item, index) => (
          <li key={index} className="floating-nav__item">
            <a
              href={item.href}
              className={`floating-nav__link ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={(e) => handleClick(e, item.href, index)}
              title={text.data[index]}
            >
              <span className="visually-hidden">{text.data[index]}</span>
              {index === activeIndex ? item.activeIcon : item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FloatingNav;
