import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './layout/Header/Header';

import Home from './pages/Home/Home';
import Profiles from './pages/Profiles/Profiles';
import Posts from './pages/Posts/Posts';
import Navbar from './pages/Navbar/Navbar';
import YoutubeSearchResult from './pages/YoutubeSearchResult/YoutubeSearchResult';
import Timer from './pages/Timer/Timer';
import Calculator from './pages/Calculator/Calculator';
import EventHandlerExamples from './pages/EventHandlerExamples/EventHandlerExamples';
import NameInputExample from './pages/NameInputExample/NameInputExample';
import SelectInputExample from './pages/SelectInputExample/SelectInputExample';

const NAVBAR_LINKS = [
  {
    href: '/',
    label: 'Home',
    iconClass: 'fas fa-home',
  },
  {
    href: '/profiles',
    label: 'Profiles',
    iconClass: 'fas fa-id-card',
  },
  {
    href: '/navbar',
    label: 'Navbar',
    iconClass: 'fas fa-bars',
  },
  {
    href: '/posts',
    label: 'Posts',
    iconClass: 'fas fa-sticky-note',
  },
  {
    href: '/youtube_search_result',
    label: 'Youtube Search',
    iconClass: 'fas fa-search',
  },
  {
    href: '/timer',
    label: 'Timer',
    iconClass: 'fas fa-hourglass-half',
  },
  {
    href: '/calculator',
    label: 'Calculator',
    iconClass: 'fas fa-calculator',
  },
  {
    href: '/event_handler_examples',
    label: 'Event Handler',
    iconClass: 'fas fa-bolt',
  },
  {
    href: '/name_input',
    label: 'Name Input',
    iconClass: 'fas fa-list',
  },
  {
    href: '/select_input',
    label: 'Select Input',
    iconClass: 'fas fa-check-square',
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <Header brandName="My Components" navItems={NAVBAR_LINKS} />
        <Router>
          <Switch>
            {/* Pages */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profiles">
              <Profiles />
            </Route>
            <Route path="/navbar">
              <Navbar />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/youtube_search_result">
              <YoutubeSearchResult />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/event_handler_examples">
              <EventHandlerExamples />
            </Route>
            <Route path="/name_input">
              <NameInputExample />
            </Route>
            <Route path="/select_input">
              <SelectInputExample />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
