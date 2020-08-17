import React from "react";
import PropTypes from "prop-types";

const NumberPropComponent = (props) => {
  const { numericprop } = props;
  return <p>The value of numericProp is: {numericprop}</p>;
};
NumberPropComponent.propTypes = {
  numericprop: PropTypes.number,
};

export default NumberPropComponent;