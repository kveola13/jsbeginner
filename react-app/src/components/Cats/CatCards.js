import React from "react"
import CatContact from "./CatContact"

function CatCards() {
    return(
        <div>
            <CatContact 
                contact={{
                    name:"Cutie",
                    imgUrl:"http://placekitten.com/300/200",
                    price:"300$",
                    email:"cutie@patootie.com"
                    }}/>
            <CatContact
                contact={{
                    name:"Emi",
                    imgUrl:"http://placekitten.com/400/200",
                    price:"400$",
                    email:"emi@patootie.com"
                }}/>
            <CatContact
            contact={{
                    name:"Leo",
                    imgUrl:"http://placekitten.com/400/300",
                    price:"500$",
                    email:"leo@patootie.com"
                }}/>
            <CatContact
            contact={{
                    name:"Sheik",
                    imgUrl:"http://placekitten.com/200/100",
                    price:"600$",
                    email:"sheik@patootie.com"
                }}/>
        </div>
    )    
}

export default CatCards