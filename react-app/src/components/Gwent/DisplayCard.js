import React from "react"

function DisplayCard(props) {
    return(<div>
        <h2>{props.name}</h2>
        <h3>Provision: {props.provisions}</h3>
        <h3>Strength: {props.strength}</h3>
    </div>
    )
}

export default DisplayCard