import React from 'react'; 
import PropTypes from 'prop-types';

const Items = (props)=>{
    const{items = [] } = props; 

    // A single item in the list, render a span 
    if(items.length === 1){
        return <span>{items[0]}</span>;
    }

    // Multiple items on the list, render a list 
    if(items.length > 1){
        return(
            <ul>
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        );
    }
    
    // No items in the list, render an empty message
    return <span>No items in list</span>
}

Items.propTypes = {
    items: PropTypes.array,
};

Items.defaultProps = {
    items: []
}

export default Items;