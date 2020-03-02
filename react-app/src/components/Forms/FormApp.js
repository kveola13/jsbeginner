import React, { Component } from "react"

class FormApp extends Component {
    constructor(){
        super()
        this.state = {
            enteredText: "",
            secondText: "",
            killingMonsters: true,
            witcher: "",
            potion: ""
        }
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(event) {
        console.log(this.state.killingMonsters)
        const {name, value, type, checked} = event.target
        
        type === "checkbox"? this.setState({[name]:checked}) :
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <label>
                    <input 
                        type="text" 
                        value={this.state.enteredText} 
                        name="enteredText" 
                        placeholder="Enter text" 
                        onChange={this.handleTextChange}
                    />
                    <br/>
                    <input 
                        type="text" 
                        value={this.state.secondText}
                        name="secondText" 
                        placeholder="Enter second text" 
                        onChange={this.handleTextChange}
                    />
                    <br/>
                </label>
                
                
                <label>
                    <textarea value={"Geralt is bae"}
                    onChange={this.handleTextChange}/>
                </label>
                
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="killingMonsters"
                        checked={this.state.killingMonsters}
                        onChange={this.handleTextChange}
                    />
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="witcher"
                        value="Yes"
                        checked={this.state.witcher==="Yes"}
                        onChange={this.handleTextChange}
                    /> Yes
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="witcher"
                        value="No"
                        checked={this.state.witcher==="No"}
                        onChange={this.handleTextChange}
                    /> No
                </label>
                <br/>
                <label>
                    <select 
                        value={this.state.potion}
                        onChange={this.handleTextChange}
                        name="potion">
                        <option value="Archgriffin Decoction">Archgriffin Decoction</option>
                        <option value="Tawny Owl">Tawny Owl</option>
                        <option value="Swallow">Swallow</option>
                        <option value="Green Oriole">Green Oriole</option>
                        <option value="Cat">Cat</option>
                    </select>
                </label>
                
                <br/>
                <h3>{this.state.enteredText} is a witcher? {this.state.witcher}</h3>
                <p>Chosen decoction is {this.state.potion}</p>
                <button>Submit</button>
            </form>
        )
    }
}

export default FormApp