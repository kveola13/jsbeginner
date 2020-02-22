import React from "react"
import Quote from "./Quote"
import QuoteData from "./QuoteData"

function WhoSaid(){

    const quotes = QuoteData.map(quote => <Quote key={quote.id} line={quote.line} author={quote.author}/>)
    
    return(
        <div>
            {quotes}
        </div>
    )
}

export default WhoSaid