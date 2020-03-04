import React from "react"

function FormComponent(props){
    return(
        <main>
            <form>
                <input name="firstName" value={props.firstName} onChange={props.handleChange} placeholder="First Name"/><br/>
                <input name="middleName" value={props.middleName} onChange={props.handleChange} placeholder="Middle Name"/><br/>
                <input name="lastName" value={props.lastName} onChange={props.handleChange} placeholder="Last name"/><br/>
                <input name="gender" value={props.gender} onChange={props.handleChange} placeholder="Gender"/><br/>
                <input name="age" value={props.age} onChange={props.handleChange} placeholder="Age"/><br/>
                <input name="nationality" value={props.nationality} onChange={props.handleChange} placeholder="Nationality"/><br/>
                <input name="gameList" value={props.gameList} onChange={props.handleChange} placeholder="Games List"/><br/>
            </form>
            <label>
                <input type="radio" 
                name="gender" 
                value="Male" 
                checked={props.gender === "Male"}
                onChange={props.handleChange}
                />Male
            </label>
            <label>
                <input type="radio" 
                name="gender" 
                value="Female" 
                checked={props.gender === "Female"}
                onChange={props.handleChange}
                />Female
            </label>
            <br />
            <select value={props.nationality} name="nationality" onChange={props.handleChange}>
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
                onChange={props.handleChange}
                checked={props.gameList.ownsWarframe}>
                </input>Warframe
            </label>
            <br />
            <label>
                <input type="checkbox"
                name="ownsTW3"
                onChange={props.handleChange}
                checked={props.gameList.ownsTW3}>
                </input>The Witcher 3
            </label>
            <br />

            <label>
                <input type="checkbox"
                name="ownsTheDarkness"
                onChange={props.handleChange}
                checked={props.gameList.ownsTheDarkness}>
                </input>The Darkness
            </label>
            <br />

            <label>
                <input type="checkbox"
                name="ownsSynthetik"
                onChange={props.handleChange}
                checked={props.gameList.ownsSynthetik}>
                </input>Synthetik
            </label>
            <br />

            <label>
                <input type="checkbox"
                name="ownsDoom"
                onChange={props.handleChange}
                checked={props.gameList.ownsDoom}>
                </input>Doom
            </label>
            <br />
        
            <button>Submit</button>
            <p>{props.firstName} {props.middleName} {props.lastName}</p>
            <p>{props.gender}</p>
            <p>{props.age}</p>
            <p>{props.nationality}</p>
            <p>{JSON.stringify(props.gameList)}</p>
        </main>
    )
}

export default FormComponent