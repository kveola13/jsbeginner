import React from "react"
import ReactDom from "react-dom"
//import MainComponent from "./components/MainComponent"
import CatCards from "./components/CatCards"

function ReactApp(){
    return (
      <div>
        <CatCards/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
