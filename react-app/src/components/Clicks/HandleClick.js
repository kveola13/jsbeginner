import React from "react"

function HandleClick(){
    return(
        <div>
            <img src="http://www.placekitten.com/400/200" 
            alt="cute kitten" 
            onMouseOver={() => console.log("Moused over")}/>
            <br>
            </br>
            <br>
            </br>
            <button onClick={() => console.log("Button was clicked")}>Click Me </button>
        </div>
    )
}

export default HandleClick