import React from 'react';
import './App.css';
import Splash from "./Components/Splash/splash.component";
import About from "./Components/About/about.component";
import Projects from "./Components/Projects/projects.component";
import Footer from "./Components/Footer/footer.component";
import Contact from './Components/Contact/contact.component'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'About'
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route
    })
  };

  render() {
      return (
        <div>
          <Splash />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )
  }
}

export default App;
