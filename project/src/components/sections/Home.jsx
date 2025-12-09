import SwitchButton from "../blocks/SwitchButton";
import Socials from "../blocks/Socials";
import { SOCIALS } from "../../script/constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../script/translation";

function Home() {
  const { language } = useLanguage();
  const text = translations[language].home;

  return (
    <section id="home" className="section section--no-padding">
      <div className="section__body">
        <div className="home">
          <SwitchButton label="UA" defaultChecked={false} />

          <div className="home__image-wrapper">
            <img
              className="home__image"
              src="icons/profile.svg"
              alt="A profile photo"
              width="200"
              height="200"
              loading="lazy"
            />
          </div>
          <div className="home__content">
            <h3 className="home__subtitle h5">{text.subheading}</h3>
            <h2 className="home__title h1">{text.heading}</h2>
            <p className="home__description">
              {text.text} <br />
            </p>

            <div className="home__actions">
              <Socials socials={SOCIALS} />
              <a className="home__button button" href="" target="_blank">
                {text.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
