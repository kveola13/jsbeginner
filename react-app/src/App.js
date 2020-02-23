import React from "react"
import ReactDom from "react-dom"

import ClickToChange from "./components/Clicks/ClickToChange"

function ReactApp(){
    return (
      <div>
        <ClickToChange/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
