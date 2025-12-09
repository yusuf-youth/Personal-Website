import TechCard from "../blocks/TechCard";
import { TECHNOLOGIES } from "../../script/constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../script/translation";

function Technologies() {
  const { language } = useLanguage();
  const text = translations[language].technologies;

  return (
    <section id="technologies" className="section">
      <header className="section__header">
        <h2 className="section__title">{text.title}</h2>
        <p className="section__description">{text.description} </p>
      </header>
      <div className="section__body">
        <div className="technologies">
          <ul className="technologies__list">
            {TECHNOLOGIES.map((tech, index) => (
              <li key={index} className="technologies__item">
                <TechCard
                  imageSrc={tech.imageSrc}
                  alt={tech.alt}
                  label={tech.label}
                  modifierClass={tech.modifierClass}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
