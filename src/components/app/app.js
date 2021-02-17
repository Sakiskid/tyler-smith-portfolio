/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  BrowserRouter as Router, 
  // Link,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from 'components/Navbar';
import './app.scss';

// Pages
import Home from '../../pages/home/home';
import Portfolio from '../../pages/PagePortfolio';
import PageUnderConstruction from 'pages/PageUnderConstruction';
import MainFX from './MainFX/MainFX';

function App() {


  return (
    <Router>
      <main>
        <MainFX />
        <Switch>
          {/* FIXME All of the commented out lines here are JUST for the PageUnderConstruction quickfix. Please uncomment! */}
          {/* ANCHOR Gallery */}
          {/* <Route exact path="/gallery"> */}
            {/* <Navbar variant="default"/> */}
            {/* <div className="container"> */}
            {/* </div> */}
          {/* </Route> */}

          {/* ANCHOR Portfolio */}
          <Route exact path="/projects">
            <Navbar variant="default"/>
            <div className="container">
              <Portfolio />
            </div>
          </Route> 
          
          {/* ANCHOR Home Page, needs to be last so it is the default page */}
          <Route path="/">
            <div className="container">
              {/* <PageUnderConstruction /> */}
              <Home />
              <Navbar variant="home"/>
            </div>
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
