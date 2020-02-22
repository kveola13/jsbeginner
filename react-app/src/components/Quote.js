import React from "react"

function Quote (props) {
    return(
        <div>
            <h2 style={{display: props.line ? "block" : "none"}}>{props.line}</h2>
            <p style={{display: props.author ? "block" : "none"}}>-{props.author}</p>
        </div>
    )
}

export default Quote