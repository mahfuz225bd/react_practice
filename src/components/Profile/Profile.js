import React from "react";
import PropTypes from "prop-types";
//import styles from './Profile.module.css';

//const skills = ["HTML5", "CSS3", "Javascript", "Bootstrap", "JQuery", "React"]

const Profile = (props) => (
  <div className="container">
    <div className="card m-4">
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <h6 className="card-subtitle mb-2">{props.title}</h6>

        <br />

        <h5>Skills</h5>
        <ul
          className="list-group list-group-horizontal-md mb-2 ps-0"
        >
          {props.skills.map((skill) => {
            return <li className="list-group-item bg-secondary text-white ps-4 pe-4 py-1 m-1 rounded-0">
              {skill}
            </li>
          })}
        </ul>

        <br />

        <h5>Social Links</h5>
        <div className="btn-group">
          <a href="#" type="button" className="btn btn-dark m-1">
            Facebook
          </a>
          <a href="#" type="button" className="btn btn-dark m-1">
            Twitter
          </a>
          <a href="#" type="button" className="btn btn-dark m-1">
            Linkedin
          </a>
          <a href="#" type="button" className="btn btn-dark m-1">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Profile.propTypes = {};

// Profile.defaultProps = {};

export default Profile;
