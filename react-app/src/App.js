import React from "react"
import ReactDom from "react-dom"
import App from "./components/Functionals/ClassApp"

function ReactApp(){
    return (
      <div>
        <ClassApp/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
