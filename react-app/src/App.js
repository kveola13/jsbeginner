import React from "react"
import ReactDom from "react-dom"
import MainComponent from "./components/MainComponent"
import TodoItem from "./components/TodoItem"

function ReactApp(){
    return (
      <div className="todolist">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
      )
}

ReactDom.render(<ReactApp/>, document.getElementById("root"))
