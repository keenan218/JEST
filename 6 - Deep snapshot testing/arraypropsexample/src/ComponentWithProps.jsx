import React from "react";
import PropTypes from "prop-types";

const ComponentWithProps = (props) => {
  const { arrayProp, headerText } = props;

  const nextNumberDisplay = arrayProp.map((seqNum) => (
    <p key={seqNum} className="nd">
      Number is : {seqNum}; Next next is {(seqNum += 1)}
    </p>
  ));

  return (
    <div>
      <h1>{headerText}</h1>
      {nextNumberDisplay}
    </div>
  );
};
ComponentWithProps.defaultProps={
  headerText: `A default setting`
}
ComponentWithProps.propTypes = {
  headerText: PropTypes.string,
  arrayProp: PropTypes.array,
};

export default ComponentWithProps;
