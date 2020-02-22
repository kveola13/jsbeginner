import React from "react"

function CatContact(props) {
    return(
        <div className="card">
                <img src={props.contact.imgUrl}/>
                    <h2>{props.contact.name}</h2>
                    <h3>price: {props.contact.price}</h3>
                    <p>email: {props.contact.email}</p>
            </div>
    )
}

export default CatContact