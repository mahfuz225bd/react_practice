import React from "react";
import PropTypes from "prop-types";

const HistoryList = (props) => (
  <ul class="list-group">
    {props.data.map((each) => (
      <li class="list-group-item text-end fs-5">
        {each.input} <br />
        {each.output} =
      </li>
    ))}
  </ul>
);

const CollapseBtn = (props) => (
  <a
    href="javascript.void(0);"
    class="btn btn-primary"
    data-bs-toggle="collapse"
    href={`#${props.target}`}
    role="button"
    aria-expanded="false"
    aria-controls={props.target}
  >
    History
  </a>
);

function History(props) {
  return (
    <div>
      <CollapseBtn target="historyList" />
      <div class="collapse" id="historyList">
        <HistoryList data={props.data} />
      </div>
    </div>
  );
}

History.propTypes = {};

History.defaultProps = {};

export default History;
