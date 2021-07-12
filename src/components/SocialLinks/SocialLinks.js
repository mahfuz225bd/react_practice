import React from "react";
import PropTypes from "prop-types";
import styles from "./SocialLinks.module.css";

const SocialLinks = (props) => (
  <>
    <h5>Social Links</h5>
    <div className="btn-group">
      {props.socialLinks.map((socialLink) => (
        <a href={socialLink.url} type="button" className="btn btn-dark m-1">
          <i className={socialLink.icon}></i>
          &nbsp;
          {socialLink.label}
        </a>
      ))}
    </div>
  </>
);

SocialLinks.propTypes = {};

SocialLinks.defaultProps = {};

export default SocialLinks;
