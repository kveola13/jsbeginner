import React, { Component } from "react"
import LifecycleConditional from "./LifecycleConditional"

class LifecycleApp extends Component {
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500)
    }

    render(){
        return(
            <div>
                <LifecycleConditional loading={this.state.loading}/>
            </div>
        )
    }
}

export default LifecycleApp