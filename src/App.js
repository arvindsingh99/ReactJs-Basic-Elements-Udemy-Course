import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Views/HomePage'
import About from './Views/About'
import ExtraComponents from './Views/ExtraComponents'


function App() {
  return (
    <div>


      <Router>

        <Header />
        <Switch className="p-2">
          <Route exact path="/">
            <HomePage name="Arvind" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/components">
            <ExtraComponents />
          </Route>
        </Switch>
        <Footer />
      </Router>



    </div>
  );
}



export default App;
