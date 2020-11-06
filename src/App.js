import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


import './App.css';

class App extends React.Component {
  
  constructor( props ){
    
    super( props)
    this.state = {
      name: "Garrian Brown",
      // Pages to navigate to (Everything for navbar)
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      // Information for each page
      home: {
        title: "Developer By Day, Enthusiast By Night",
        subTitle: "Self-learning software and hardware engineering through research & development.",
        summary: "Checkout some of the things i've been working on below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let\s Get In Touch",
      },
    };
  }
  
  render(){

    return (
      <Router>
        <Container maxWidth="xl">
          {/* Navigation Section */}
          <Navbar className="border-bottom" bg="trasparent" expand="lg">
            <Navbar.Brand>{ this.state.name }</Navbar.Brand>
            {/* Mobile Toggle/Collapse */}
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* Main Components to Render Using Router */}
          <Route path="/"
            exact render={ ()=><Home title={ this.state.home.title } subTitle={ this.state.home.subTitle } summary={ this.state.home.summary } /> } />

          <Route path="/about" render={ ()=><AboutPage title={ this.state.about.title } /> } />

          <Route path="/contact" render={ ()=><ContactPage title={ this.state.contact.title } /> } />
          {/* Footer Component */}
          <Footer />
        </Container>
      </Router>
    );

  }
  
  
}

export default App;
