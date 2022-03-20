import React from 'react';
import Price from '../Price/Price';

const Device = (props) => {
    return (
        <div>
            <h1> I have: {props.name}</h1>
            <Price price = {props.price}></Price>
        </div>
    );
};

export default Device;