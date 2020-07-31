import React from 'react';
import './Mordechai.css';

const Mordechai = ({ name, classNameHandler, className }) => {
    return (
        <div>
            <h2 className={className}>{name} is trying to put it all together...</h2>
            <button onClick={classNameHandler}>click to change Mordechai colour</button>
        </div>
    )
}

export default Mordechai;
