import React from "react"
import ReactDom from "react-dom"
import MyInfo from "./components/MyInfo"
import Footer from "./components/Footer"

function ReactApp(){
    return (
      <div>
        <ul>
            <li>Geralt</li>
            <li>Jaskier</li>
            <li>Yarpen</li>
        </ul>
        <Footer/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
