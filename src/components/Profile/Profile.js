import React from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import Skills from "./Skills/Skills";
//import PropTypes from "prop-types";
//import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className="container pt-3">
      <h2>Profile Component Example</h2>
      <div className="card m-4">
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-subtitle mb-2">{props.title}</h6>

          <br />

          <Skills skills={props.skills} />

          <br />
          
          <SocialLinks socialLinks={props.socialLinks} />
        </div>
      </div>
    </div>
  );
};

// Profile.propTypes = {};

// Profile.defaultProps = {};

export default Profile;
