import React, { Component } from "react"
import FormComponent from "./FormComponent"

class FormTemplate extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            age: "",
            nationality: "",
            gameList: {
                ownsWarframe: false,
                ownsTW3: false,
                ownsTheDarkness: false,
                ownsSynthetik: false,
                ownsDoom: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState(previousState => {
            return{
                gameList: {
                    ...previousState.gameList,
                    [name]: checked
                }
            }
        }):
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
        <FormComponent
            handleChange={this.handleChange}
            {...this.state}
        />
        )
    }
}

export default FormTemplate