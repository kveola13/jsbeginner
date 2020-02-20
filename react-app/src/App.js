import React from "react"
import ReactDom from "react-dom"
import MyInfo from "./components/MyInfo"

function ReactApp(){
    return (
        <ul>
            <li>Geralt</li>
            <li>Jaskier</li>
            <li>Yarpen</li>
        </ul>)
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
