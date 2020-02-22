import React from "react"
import GwentCardsData from "./GwentCardsData"
import DisplayCard from "./DisplayCard"

function GwentCards() {
    const gwentycards= GwentCardsData.map(cards => <DisplayCard name={cards.name}
    provisions={cards.provisions} strength={cards.strength}
    />)
    return(
        <div>{gwentycards}</div>
    )
}

export default GwentCards