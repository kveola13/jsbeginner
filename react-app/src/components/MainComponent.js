import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import NewApp from "./NewApp"
import MoreComplexApp from "./MoreComplexApp"

function MainComponent() {
    return(
        <div>
            <Header/>
            <NewApp/>
            <Footer/>
            <MoreComplexApp/>
        </div>
    )
}

export default MainComponent