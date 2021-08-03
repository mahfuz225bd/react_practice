import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = (props) => (
  <>
    <h5>Social Links</h5>
    <div className="btn-group">
      {props.links.map((socialLink) => (
        <a
          href={socialLink.href}
          type="button"
          className="btn btn-dark m-1"
          key={socialLink.label}
        >
          <i className={socialLink.icon}></i>
          <span className="d-none d-md-inline">&nbsp;{socialLink.label}</span>
        </a>
      ))}
    </div>
  </>
);

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// SocialLinks.defaultProps = {};

export default SocialLinks;
