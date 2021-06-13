// import packages
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' render={(props) => (
          <HomePage {...props} />
        )} />
        <Route path='/about' render={(props) => (
          <AboutPage {...props} />
        )} />
        <Route path='/work' render={(props) => (
          <WorkPage {...props} />
        )} />
        <Route path='/events' render={(props) => (
          <EventsPage {...props} />
        )} />
        <Route path='/contact' render={(props) => (
          <ContactPage {...props} />
        )} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
