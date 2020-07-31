import React from 'react';

const KatieCard = ({ name }) => {
    return (
        <div>
            <h1>Hi I'm {name}</h1>
            <img className="palmTreePic" src="https://unsplash.com/photos/wVnBd8wm1Cc" alt="Wax palm tree" />
        </div>
    );
};

export default KatieCard;
