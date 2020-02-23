import React from "react"

class ClickToChange extends React.Component{
    constructor() {
        super()
        this.state = {
            count: 1
        }
        this.whenClicked = this.whenClicked.bind(this)
    }

    whenClicked(){
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.whenClicked}>Increase</button>
            </div>
        )
    }
}

export default ClickToChange