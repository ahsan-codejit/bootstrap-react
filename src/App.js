import React, { Component } from 'react';
import './App.css';
import Nav from './components/common/Nav';
import Header from './components/common/Header';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Clients from './components/pages/Clients';
import Contact from './components/pages/Contact';
import Footer from './components/common/Footer';

import { Modal1, Modal2, Modal3, Modal4, Modal5, Modal6 } from './components/modals'

class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./assets/js/scripts.js";
    script.async = true;
    document.getElementById('app').appendChild(script);
  }

  render() {
    return (
      <div id="app">
        <Nav />
        <Header />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Clients />
        <Contact />
        <Footer />
        <Modal1 />
        <Modal2 />
        <Modal3 />
        <Modal4 />
        <Modal5 />
        <Modal6 />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Nav />
//       <Header />
//       <Services />
//       <Portfolio />
//       <About />
//       <Team />
//       <Clients />
//       <Contact />
//       <Footer />
//       <Modal1 />
//       <Modal2 />
//       <Modal3 />
//       <Modal4 />
//       <Modal5 />
//       <Modal6 />
//     </div>
//   );
// }

export default App;
