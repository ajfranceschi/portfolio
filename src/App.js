import React from 'react';
import './App.css';
import About from "./Pages/About/about.component";
import Header from "./Components/Header/header.component";
import Contact from "./Pages/Contact/contact.component";

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
          <Header currentPage={'About'}/>
          {this.state.route === 'About' ? <About /> : <Contact />}
        </div>
      )
  }
}

export default App;
