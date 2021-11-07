import React from "react";
import PropTypes from "prop-types";

const Tag = (props) => {
  if (props.mode == 0) {
    return (
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    );
  } else {
    return <button onClick={props.onRemove}>{props.name}</button>;
  }
};

export default Tag;

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  mode: PropTypes.number.isRequired,
};
