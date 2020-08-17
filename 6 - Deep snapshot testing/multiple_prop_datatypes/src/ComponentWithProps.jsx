import React from 'react'; 
import PropTypes from 'prop-types';

const ComponentWithProps = props =>{
    const {headerText} = props; 
    return(<h1>{headerText}</h1>);
}
ComponentWithProps.defaultProps = {
    headerText: `Text supplied by the default value of headerText`,
};

ComponentWithProps.propTypes={
    headerText: PropTypes.string
}
export default ComponentWithProps