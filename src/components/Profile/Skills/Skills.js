import React from 'react';
import PropTypes from 'prop-types';

const Skills = (props) => (
  <>
    <h5>Skills</h5>
    <ul className="list-group list-group-horizontal-md mb-2 ps-0">
      {props.skills.map((skill, index) => {
        return (
          <li
            className="list-group-item bg-secondary text-white ps-4 pe-4 py-1 m-1 rounded-0"
            key={index}
          >
            {skill}
          </li>
        );
      })}
    </ul>
  </>
);

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

// Skills.defaultProps = {};

export default Skills;
