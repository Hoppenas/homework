import './button.scss';
import React from 'react';
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import PropTypes from "prop-types";

function Button(props) {
    const { click } = props;
  return (
    <button className="button" onClick={click}>
        <Search className="button-logo" />
    </button>
  );
}

Button.propTypes = {
    click: PropTypes.func,
}

export default Button;