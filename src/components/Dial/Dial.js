import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid red', margin:'5px'}}>
            <h4>This is dial.</h4>
            <p>steps so fo : {props.steps}</p>
        </div>
    );
};

export default Dial;