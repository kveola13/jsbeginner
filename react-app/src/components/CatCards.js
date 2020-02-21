import React from "react"
import CatContact from "./CatContact"

function CatCards() {
    return(
        <div className="catcard">
            <CatContact 
                name="Cutie"
                imgUrl="http://placekitten.com/300/200"
                price="300$"
                email="cutie@patootie.com"/>
            <CatContact/>
            <CatContact/>
            <CatContact/>
        </div>
    )    
}

export default CatCards