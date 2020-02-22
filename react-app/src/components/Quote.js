import React from "react"

function Quote (props) {
    return(
        <div>
            <h2>{props.line}</h2>
            <p>-{props.author}</p>
        </div>
    )
}

export default Quote