import React from "react"
import "./Luke.css"

const RandomFunction = ({ luke }) => {
    return (
        <div>
            <p>My name is {luke}</p>
            <img className="Spinning" src="https://p1.hiclipart.com/preview/841/78/529/emoji-sticker-smiling-emoji-png-clipart.jpg" alt="Emoji" />
        </div>
    )
}

export default RandomFunction