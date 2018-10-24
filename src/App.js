import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import ShowContainer from './containers/ShowsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/band" component={HomeContainer} />
            <Route path="/shows" component={ShowContainer} />
            <Route path="/press-kit" component={HomeContainer} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
