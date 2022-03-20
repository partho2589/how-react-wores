import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps =()=>{
        const newStepsCount = steps +1
        setSteps(newStepsCount)
    }

    return (
        <div style={{border: '2px solid pink', margin: '20px'}}>
            <h1> This is my smart watch!!</h1>
             <h3>My current steps: {steps}</h3>
             <button onClick={increaseSteps}> Click me </button>
          <Display name='garmin' steps = {steps}></Display>
        </div>
    );
};

export default Watch;