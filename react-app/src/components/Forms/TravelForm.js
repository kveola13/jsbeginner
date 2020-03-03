import React, { Component } from "react"

class TravelForm extends Component {
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
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/><br/>
                    <input name="middleName" value={this.state.middleName} onChange={this.handleChange} placeholder="Middle Name"/><br/>
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last name"/><br/>
                    <input name="gender" value={this.state.gender} onChange={this.handleChange} placeholder="Gender"/><br/>
                    <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age"/><br/>
                    <input name="nationality" value={this.state.nationality} onChange={this.handleChange} placeholder="Nationality"/><br/>
                    <input name="gameList" value={this.state.gameList} onChange={this.handleChange} placeholder="Games List"/><br/>
                </form>
                <label>
                    <input type="radio" 
                    name="gender" 
                    value="Male" 
                    checked={this.state.gender === "Male"}
                    onChange={this.handleChange}
                    />Male
                </label>
                <label>
                    <input type="radio" 
                    name="gender" 
                    value="Female" 
                    checked={this.state.gender === "Female"}
                    onChange={this.handleChange}
                    />Female
                </label>
                <br />
                <select value={this.state.nationality} name="nationality" onChange={this.handleChange}>
                    <option value="">Choose your nationality</option>
                    <option value="French">France</option>
                    <option value="German">Germany</option>
                    <option value="Polish">Poland</option>
                    <option value="Martian">Mars</option>
                    <option value="Danish">Denmark</option>
                </select>

                <br />
                
                <label>
                    <input type="checkbox"
                    name="ownsWarframe"
                    onChange={this.handleChange}
                    checked={this.state.gameList.ownsWarframe}>
                    </input>Warframe
                </label>
                <br />
                <label>
                    <input type="checkbox"
                    name="ownsTW3"
                    onChange={this.handleChange}
                    checked={this.state.gameList.ownsTW3}>
                    </input>The Witcher 3
                </label>
                <br />

                <label>
                    <input type="checkbox"
                    name="ownsTheDarkness"
                    onChange={this.handleChange}
                    checked={this.state.gameList.ownsTheDarkness}>
                    </input>The Darkness
                </label>
                <br />

                <label>
                    <input type="checkbox"
                    name="ownsSynthetik"
                    onChange={this.handleChange}
                    checked={this.state.gameList.ownsSynthetik}>
                    </input>Synthetik
                </label>
                <br />

                <label>
                    <input type="checkbox"
                    name="ownsDoom"
                    onChange={this.handleChange}
                    checked={this.state.gameList.ownsDoom}>
                    </input>Doom
                </label>
                <br />
            
                <button>Submit</button>
                <p>{this.state.firstName} {this.state.middleName} {this.state.lastName}</p>
                <p>{this.state.gender}</p>
                <p>{this.state.age}</p>
                <p>{this.state.nationality}</p>
                <p>{JSON.stringify(this.state.gameList)}</p>
            </main>
        )
    }
}

export default TravelForm