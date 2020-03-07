import React from 'react';
import './App.css';
import Splash from './Components/Splash/splash.component';
import About from './Components/About/about.component';
import Projects from './Components/Projects/projects.component';
import Footer from './Components/Footer/footer.component';
import Contact from './Components/Contact/contact.component';

const App = () => {
  return (
    <div>
      <Splash />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
