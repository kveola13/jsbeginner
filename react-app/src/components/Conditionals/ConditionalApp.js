import React, { Component } from "react"

class ConditionalApp extends Component{
    constructor(){
        super()
        this.state={
            loggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(previousState => {
            return {
                loggedIn: !previousState.loggedIn
            }
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.loggedIn ? <button onClick={this.handleClick}>Login</button> : <button onClick={this.handleClick}>Logout</button>
                }
            </div>
        )
    }
}

export default ConditionalApp