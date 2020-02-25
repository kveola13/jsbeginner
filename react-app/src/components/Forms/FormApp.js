import React, { Component } from "react"

class FormApp extends Component {
    constructor(){
        super()
        this.state = {
            enteredText: "",
            secondText: ""
        }
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <input type="text" 
                value={this.state.enteredText} 
                name="enteredText" 
                placeholder="Enter text" 
                onChange={this.handleTextChange}/>
                
                <input type="text" 
                value={this.state.secondText}
                name="secondText" 
                placeholder="Enter second text" 
                onChange={this.handleTextChange}/>

                <h2>{this.state.enteredText}{this.state.secondText}</h2>
            </form>
        )
    }
}

export default FormApp