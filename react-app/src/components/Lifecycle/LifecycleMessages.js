import React, {Component} from "react"

class LifecycleMessages extends Component {
    constructor() {
        super()
        this.state = {
            inboxMessages: [
                
            ]
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.inboxMessages.length > 0 &&
                    <h2>You have {this.state.inboxMessages.length} messages</h2>
                }
            </div>
        )
    }
}
export default LifecycleMessages