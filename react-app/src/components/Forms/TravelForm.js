import React, { Component } from "react"

class FormApp extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            age: 0,
            nationality: "",
            gameList: []
        }
    }

    handleChange(event){
        
    }

    render(){
        return(
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/><br/>
                    <input name="middleName" value={this.state.middleName} onChange={this.handleChange} placeholder="Middle Name"/><br/>
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last name"/><br/>
                    <input name="gender" value={this.state.gender} onChange={this.handleChange} placeholder="Gender"/><br/>
                    <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age"/><br/>
                    <input name="nationality" value={this.state.nationality} onChange={this.handleChange} placeholder="Nationality"/><br/>
                </form>
            </main>
        )
    }
}