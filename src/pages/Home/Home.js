import React from 'react';
// import PropTypes from 'prop-types';

const Home = () => (
  <div className="container py-3">
    <h2>Welcome</h2>
    <p className="fs-5 mb-5">
      There are some components created \w{' '}
      <a href="https://reactjs.org/" className="text-decoration-none">
        React.js
      </a>
      . Their demo is shown on several pages. By clicking on the links, located
      at the navigation bar, navigate the pages.
    </p>
    <h5>Created Components</h5>
    <ul>
      <li>Profile</li>
      <li>Navbar</li>
      <li>Post</li>
      <li>Youtube Search Result</li>
      <li>Timer</li>
      <li>A Simple Calculator</li>
      <li>Event Handler Examples</li>
      <li>Name Input</li>
      <li>Select Input</li>
    </ul>
    <h5>Incomplete Tasks</h5>
    <ul>
      <li>Navbar SearchBox</li>
      <li>Fixing Youtube Search Result's state lifting isses</li>
      <li>Timer</li>
      <li>Keyboard input action on Calculator</li>
      <li>
        Using <cite title="A Popover is a container-type graphical control element that hovers over its parent window and blocks any other interaction with until it is selected.">popover</cite> for <b>History</b>{' '}
        and <cite title="The tooltip, also known as infotip or hint, is a common graphical user interface element in which, when hovering over a screen element or component, a text box displays information about that element.">tooltip</cite> for{' '}
        <b>Input Dispaly</b>, when input value is truncated.
      </li>
    </ul>
  </div>
);

// Home.propTypes = {};

// Home.defaultProps = {};

export default Home;
