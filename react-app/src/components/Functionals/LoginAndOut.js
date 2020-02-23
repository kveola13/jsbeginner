import React from "react"

class LoginAndOut extends React.Component {
    constructor(){
        super()
        this.state={
            loggedIn: false
        }
    }
    render(){
        return(
            <div>
                <h2>You are logged {this.state.loggedIn ? "in" : "out"} </h2>
            </div>
        )
    }
}

export default LoginAndOut