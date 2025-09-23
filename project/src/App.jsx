import AboutMe from "./components/sections/AboutMe";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Technologies from "./components/sections/Technologies";
import Services from "./components/sections/Services";
import FloatingNav from "./components/blocks/FloatingNav";

function App() {
  return (
    <>
      <h1 className="visually-hidden">Personal Website</h1>
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
