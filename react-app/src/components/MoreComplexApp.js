import React from "react"

function MoreComplexApp(){
    const name = "geralt"
    const provisions = 13

    const curDate = new Date()
    const curHours = curDate.getHours()

    let time

    if(curHours < 12){
        time = "morning"
    } else if (curHours >= 12 && curHours < 16){
        time = "afternoon"
    }
    else {
        time = "night"
    }

    return(<div>
    <h2>the name is {name} and the card costs {provisions} provisions</h2>
    <h3>It's now {time}</h3>
    </div>
    )
}

export default MoreComplexApp