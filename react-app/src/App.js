import React from "react"
import ReactDom from "react-dom"

function ReactApp(){
    return (
        <ul>
            <li>Geralt</li>
            <li>Jaskier</li>
            <li>Yarpen</li>
        </ul>)
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
