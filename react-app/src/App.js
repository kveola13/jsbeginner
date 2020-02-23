import React from "react"
import ReactDom from "react-dom"
import HandleClick from "./components/HandleClick"

function ReactApp(){
    return (
      <div>
        <HandleClick/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
