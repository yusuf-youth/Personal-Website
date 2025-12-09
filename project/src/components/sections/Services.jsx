import { SERVICES } from "../../script/constants";
import ServiceCard from "../blocks/ServiceCard";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../script/translation";

function Services() {
  const { language } = useLanguage();
  const text = translations[language].services;

  return (
    <section id="services" className="section">
      <header className="section__header">
        <h2 className="section__title">{text.title}</h2>
        <p className="section__description">{text.description}</p>
      </header>
      <div className="section__body">
        <div className="services">
          <ul className="services__list">
            {SERVICES.map((service, index) => (
              <li key={index} className="services__item">
                <ServiceCard
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  title={text.data[index].title}
                  highlightedText={text.data[index]?.highlightedText}
                >
                  {text.data[index].description}
                </ServiceCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
