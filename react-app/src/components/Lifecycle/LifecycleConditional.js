import React from "react"

function LifecycleConditional (props){
    if(props.loading){
        return <h2>Loading...</h2>
    }
    return(
        <h2>Done loading</h2>
    )
}

export default LifecycleConditional