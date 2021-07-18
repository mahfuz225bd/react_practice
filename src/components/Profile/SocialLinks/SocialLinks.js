import React from "react";
import PropTypes from "prop-types";

const SocialLinks = (props) => (
  <>
    <h5>Social Links</h5>
    <div className="btn-group">
      {props.socialLinks.map((socialLink) => (
        <a href={socialLink.url} type="button" className="btn btn-dark m-1">
          <i className={socialLink.icon}></i>
          <span className="d-none d-md-inline">&nbsp;{socialLink.label}</span>
        </a>
      ))}
    </div>
  </>
);

SocialLinks.propTypes = {
  socialLinks: {
    url: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
  }
};

SocialLinks.defaultProps = {};

export default SocialLinks;
