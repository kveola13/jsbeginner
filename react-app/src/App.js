import React from "react"
import ReactDom from "react-dom"
import WhoSaid from "./components/WhoSaid"

function ReactApp(){
    return (
      <div>
        <WhoSaid/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
