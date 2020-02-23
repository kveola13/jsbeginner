import React from "react"

class StateApp extends React.Component {
    constructor() {
        super()
        this.state = {
            appendText: "Because you can do this"
        }
    }
    render() {
        return(
            <div>
                <p>Understanding states is vital {this.state.appendText}</p>
                <h2>{this.state.addName}</h2>
                <h2>{this.state.addStrength} str</h2>
            </div>
        )
    }
}

export default StateApp