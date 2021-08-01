import React from 'react';
// import PropTypes from 'prop-types';
import Profile from '../../components/Profile/Profile';

import data from '../../assets/data/fakeProfiles';

const Profiles = () => (
  <div className="container py-3">
    <h2>Profiles</h2>
    {data.map((each, index) => (
      <Profile
        name={each.name}
        title={each.title}
        skills={each.skills}
        socialLinks={each.socialLinks}
        key={index}
      />
    ))}
  </div>
);

// Profiles.propTypes = {};

// Profiles.defaultProps = {};

export default Profiles;
