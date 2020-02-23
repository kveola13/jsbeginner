import React from "react"
import ReactDom from "react-dom"
import App from "./components/Functionals/App"

function ReactApp(){
    return (
      <div>
        <App/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
