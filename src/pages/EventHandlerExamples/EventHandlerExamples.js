import React from 'react';
import PropTypes from 'prop-types';

cosnt TargetArea = (porps) => (
  <div style={{width: '150px', height: '150px'}} onClick={props.onClick}
  onDoubleClick={props.onDoubleClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
    Target Area
  </div>
)

const EventHandlerExamples = () => (
  <div>
    EventHandlerExamples Component
  </div>
);

EventHandlerExamples.propTypes = {};

EventHandlerExamples.defaultProps = {};

export default EventHandlerExamples;
