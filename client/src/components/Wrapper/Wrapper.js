import React from 'react';

const Wrapper = props => {
    return(
        <div className='wrap'>
        {props.children}
        </div>
    )
};

export default Wrapper;