import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavContainer from './containers/NavContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import ShowContainer from './containers/ShowsContainer';
import BandContainer from './containers/BandContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavContainer />
          <Header />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/band" component={BandContainer} />
          <Route path="/shows" component={ShowContainer} />
          <Route path="/press-kit" component={HomeContainer} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
