import React from 'react';
import PropTypes from 'prop-types';

import styles from './DataList.module.css';

const Badge = (props) => (
  <span className="badge bg-secondary rounded-pill">{props.value}</span>
);

const DeleteButton = (props) => (
  <button className="btn btn-outline-danger" onClick={props.onClick}>
    <i className="fas fa-minus-circle"></i> Delete
  </button>
);

const DataListItem = (props) => (
  <li className="list-group-item rounded-0 border-top-0 border-start-0 border-end-0 d-flex justify-content-between align-items-center">
    {props.children}
  </li>
);

const DataList = (props) => (
  <>
    <div className="d-flex justify-content-between align-items-center mb-2">
      <h5>{props.title}</h5>
      {props.onClearAll && (
        <button className="btn btn-outline-danger" onClick={props.onClearAll}>
          <i className="fa fa-trash-alt"></i> Clear All
        </button>
      )}
    </div>
    <ul className={['list-group border', styles['datalist']].join(' ')}>
      {props.children}
    </ul>
    <span>{props.footerText}</span>
  </>
);

Badge.prototype = {
  value: PropTypes.string.isRequired,
};

DeleteButton.prototype = {
  onClick: PropTypes.func.isRequired,
};

DataListItem.prototype = {
  id: PropTypes.string,
};

DataList.propTypes = {
  title: PropTypes.string.isRequired,
  onClearAll: PropTypes.func,
  footerText: PropTypes.string,
};

DataList.defaultProps = {};

export { DataList, DataListItem, DeleteButton, Badge };
