import React from "react"
import "./Luke.css"

const RandomFunction = ({ luke }) => {
    return (
        <div>
            <p>My name is {luke}</p>
            <img className="Spinning" src="https://www.pngmart.com/files/1/Emoji-Face-Transparent-Background.png" alt="Emoji" />
        </div>
    )
}

export default RandomFunction