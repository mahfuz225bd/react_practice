import React from "react";
import PropTypes from "prop-types";
import Profile from "../../components/Profile/Profile";

import data from "./fakeData";

const Profiles = () => (
  <div className="container pt-3">
    <h2>Profile Component Example \w 10 Fake Data</h2>
    {/* <Profile
      name="Muhammad Sultan Al Mahfuz"
      title="Web Developer and Designer"
      skills={["HTML5", "CSS4", "Javascript", "JQuery"]}
    /> */}
    {/* Will be shown with 10 fake data */}
    {data.map(each => (
      <Profile
        name={each.name}
        title={each.title}
        skills={each.skills}
        socialLinks={each.socialLinks}
      />
    ))}
  </div>
);

Profiles.propTypes = {};

Profiles.defaultProps = {};

export default Profiles;