import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Profile from "./components/Profile/Profile";
import Header from "./layout/Header/Header";

const socialLinks = [
  {
    icon: "fab fa-facebook-f",
    url: "",
    label: "Facebook",
  },
  {
    icon: "fab fa-twitter",
    url: "",
    label: "Twitter",
  },
  {
    icon: "fab fa-linkedin",
    url: "",
    label: "LinkedIn",
  },
  {
    icon: "fab fa-github",
    url: "",
    label: "GitHub",
  },
];

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
            <Route path="/components/profile">
              <Profile 
                name="Muhammad Sultan Al Mahfuz"
                title="Web Developer and Designer"
                skills={["HTML5", "CSS4", "Javascript", "JQuery"]}
                socialLinks={socialLinks}
              />
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
