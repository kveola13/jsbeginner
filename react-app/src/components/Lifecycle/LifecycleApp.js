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
                {this.state.loading ? <h2>Loading...</h2> : <LifecycleConditional/>}
            </div>
        )
    }
}

export default LifecycleApp