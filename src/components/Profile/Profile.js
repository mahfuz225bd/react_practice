import React from 'react';

import SocialLinks from './SocialLinks/SocialLinks';
import Skills from './Skills/Skills';

import PropTypes from 'prop-types';

const ProfileArea = (props) => (
  <div className="container pt-3">
    <div className="card my-2">
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <h6 className="card-subtitle mb-2">{props.title}</h6>
        {props.children}
      </div>
    </div>
  </div>
);

const Profile = (props) => {
  return (
    <ProfileArea name={props.name} title={props.title}>
      <Skills skills={props.skills} />
      <br />
      <SocialLinks links={props.socialLinks} />
    </ProfileArea>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Profile.defaultProps = {
  socialLinks: [
    {
      icon: 'fab fa-facebook-f',
      url: '',
      label: 'Facebook',
    },
    {
      icon: 'fab fa-twitter',
      url: '',
      label: 'Twitter',
    },
    {
      icon: 'fab fa-linkedin',
      url: '',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-github',
      url: '',
      label: 'GitHub',
    },
  ],
};

export default Profile;
