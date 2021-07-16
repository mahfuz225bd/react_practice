import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Header from "./layout/Header/Header";

import Posts from "./pages/Posts/Posts";
import Profiles from "./pages/Profiles/Profiles";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            {/* Pages */}
            <Route exact path="/">
              <Page title="Welcome" />
            </Route>
            <Route path="/about">
              <Page title="About" />
            </Route>
            <Route path="/services">
              <Page title="Services" />
            </Route>
            <Route path="/products">
              <Page title="Products" />
            </Route>
            <Route path="/contact">
              <Page title="Contact" />
            </Route>
            {/* Components */}
            <Route path="/components/profiles">
              <Profiles />
            </Route>
            <Route path="/components/navbar">
              <Page title="Navbar Component is Located Above" />
            </Route>
            <Route path="/components/posts">
              <Posts />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

function Page(props) {
  return (
    <div className="container pt-3">
      <h2>{props.title}</h2>
    </div>
  );
}

export default App;
