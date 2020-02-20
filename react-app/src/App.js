import React from "react"
import ReactDom from "react-dom"
import MainComponent from "./components/MainComponent"

function ReactApp(){
    return (
      <div>
        <ul>
            <li>Geralt</li>
            <li>Jaskier</li>
            <li>Yarpen</li>
        </ul>
        <MainComponent/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
