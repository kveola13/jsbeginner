import React from "react"

function DisplayCard(props) {
    return(<div>
        <h2 style={{display: props.name ? "block" : "none"}}>{props.name}</h2>
        <h3 style={{display: props.provisions ? "block" : "none"}}>Provision: {props.provisions}</h3>
        <h3 style={{display: props.strength ? "block" : "none"}}>Strength: {props.strength}</h3>
    </div>
    )
}

export default DisplayCard