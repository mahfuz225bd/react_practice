import React from "react";
import PropTypes from "prop-types";

const DropDownItem = props => (
  <li>
    <a class="dropdown-item" href={props.href}>
      {props.label}
    </a>
  </li>
);

const DropDownLinks = props => (
  <>
    <li className="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id={props.id}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.label}
      </a>
      <ul class="dropdown-menu" aria-labelledby={props.id}>
        {props.dropDownLinks.map((dropDownLink) => (
          <DropDownItem href={dropDownLink.href} label={dropDownLink.label} />
        ))}
      </ul>
    </li>
  </>
);

DropDownLinks.propTypes = {};

DropDownLinks.defaultProps = {};

export default DropDownLinks;
