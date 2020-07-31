import React from 'react';
import "./KatieCard.css";

const KatieCard = ({ name }) => {
    return (
        <div>
            <h1>Hi I'm {name}</h1>
            <img className="palmTreePic" src="https://images.unsplash.com/photo-1532185922611-3410b1898a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80" alt="Wax palm tree" />
        </div>
    );
};

export default KatieCard;
