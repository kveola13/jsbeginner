import React from "react"
import ReactDom from "react-dom"
import TodoApp from "./components/Todo/TodoApp"

function ReactApp(){
    return (
      <div>
        <TodoApp/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
