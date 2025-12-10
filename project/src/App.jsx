import {
  Home,
  AboutMe,
  Technologies,
  Projects,
  Services,
  FloatingNav,
} from "./script/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <h1 className="visually-hidden">Resume: Ramil's Personal Website</h1>
      <main className="content">
        <Home />
        <AboutMe />
        <Technologies />
        <Projects />
        <Services />
        <FloatingNav />
      </main>
    </>
  );
}

export default App;
