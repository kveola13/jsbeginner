import React from "react"
import ReactDom from "react-dom"
import GwentCards from "./components/Gwent/GwentCards"

function ReactApp(){
    return (
      <div>
        <GwentCards/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
