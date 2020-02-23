import React from "react"
import ReactDom from "react-dom"
import LoginAndOut from "./components/Functionals/LoginAndOut"

function ReactApp(){
    return (
      <div>
        <LoginAndOut/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
