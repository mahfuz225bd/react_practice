import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonPanel.module.css';

const Button = (props) => {
  const classNames =
    'btn btn-outline-secondary rounded-0 d-table-cell align-middle';
  return (
    <div className="d-inline">
      <span
        className={[classNames, styles['calc-btn']].join(' ')}
        onClick={props.onClick}
        style={{ fontSize: '27px' }}
      >
        {props.value}
      </span>
    </div>
  );
};

const ButtonPanel = (props) => <div className="d-table">{props.children}</div>;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ButtonPanel, Button };
