import React from "react"

function MoreComplexApp(){
    const name = "geralt"
    const provisions = 13

    const curDate = new Date()
    const curHours = curDate.getHours()

    let time

    const styles={
        fontSize: 30
    }

    if(curHours < 12){
        time = "morning"
        styles.color= "#04756F"
    } else if (curHours >= 12 && curHours < 16){
        time = "afternoon"
        styles.color= "#8914A3"
    }
    else {
        time = "night"
        styles.color= "#D90000"
    }

    
    return(<div>
    <h2>the name is {name} and the card costs {provisions} provisions</h2>
    <h3 style={styles}>It's now {time}</h3>
    </div>
    )
}

export default MoreComplexApp