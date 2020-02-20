import React from "react"
import ReactDom from "react-dom"

function ReactApp(){
    return (
        <ul>
            <li>Geralt</li>
            <li>Jaskier</li>
            <li>Yarpen</li>
        </ul>)
}

function MyInfo(){
  return(
    <div>
      <h1>Ola</h1>
      <p>Programmer</p>
      <li>Java</li>
      <li>Python</li>
      <li>JS?</li>
    </div>
  )
}

ReactDom.render(<MyInfo/>, document.getElementById("root"))
