<img src="images/resume.png" width="600" />

This repository contains the source code for my personal website and digital résumé, built to showcase my education, skills, projects, and professional experience. The <a target="_blank" href="https://yusuf-youth.github.io/Resume/">site</a> is designed to be clean, responsive, and easy to navigate, providing recruiters and collaborators with a quick overview of my background. It serves as both a résumé and portfolio, highlighting my technical expertise and career journey.

<h2>Project Features</h2>
The project has several features that are worth paying attention to. 
<h3>React</h3>
<ul>
  <li>
    <b>Components. </b> The app contains reusable components that can be used throughout the project.
  </li>
  <li>
    <b>Hooks. </b> The app makes use of React hooks like <code>useState</code>, <code>useEffect</code>, and <code>useContext</code> to manage component state, handle side effects, and manage global state efficiently.
  </li>
  <li>
    <b>Context. </b> The app uses context called <code>LanguageContext</code> that manages and persists the application's language state (English or Ukrainian) using the localStorage API.
  </li>
  <li>
    <b>Custom Hook. </b> The website implements <code>useLanguage</code> custom hook to abstract the logic for accessing the current language state and the function to toggle it, simplifying localization management across all components.
  </li>
</ul>

<h3>Markup & Styles</h3>
<ul>
  <li>
    <b>BEM. </b>The project follows the BEM methodology for structuring SCSS, where each component is broken down into <i>blocks</i>, <i>elements</i>, and <i>modifiers</i>. This approach ensures that the code is modular, scalable, and easy to maintain.
  </li>
  <li>
    <b>Global Styles. </b>The project has <i>_global.scss</i> for global styles, <i>_normalize.scss</i> for resetting default styles, <i>_mixins.scss</i> and <i>_media.scss</i> for comfortable styling and others.
  </li>
  <li>
    <b>CSS Property Grouping. </b> CSS properties are organized in a consistent and logical order to improve readability, maintainability, and ease of debugging.
  </li>
  <li>
    <b>CSS Variables. </b>The project uses css variables throughout styles ensuring maintainability, reusability, and consistency of the code.
  </li>
  <li>
    <b>SCSS. </b>The project is written in the SCSS preprocessor and contains useful features such as mixins for comfortable styling.
  </li>
</ul>

<h2>App Features</h2>
The app has several features:
<ul>
  <li>
    <b>Translation. </b> The website offers bidirectional language switching between English (EN) and Ukrainian (UA) for seamless user localization.
  </li>
  <li>
    <b>Constants. </b> The website utilizes a dedicated <code>constants.jsx</code> file to store and manage structured data objects, ensuring a single source of truth for all dynamic content rendered across components.
  </li>
  <li>
    <b>Navigation. </b> The website features a floating sticky navbar that efficiently links and navigates between all major page sections.
  </li>
  <li>
    <b>Design. </b> The website showcases a clean, minimalistic aesthetic with a focus on high content readability and a balanced use of white space.
  </li>
</ul>
