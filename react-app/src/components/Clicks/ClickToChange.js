import React from "react"

class ClickToChange extends React.Component{
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    whenClicked(){
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.whenClicked}>++</button>
            </div>
        )
    }
}

export default ClickToChange