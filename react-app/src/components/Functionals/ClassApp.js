import React, {Component} from "react"

class ClassApp extends React.Component {
    render(){
        return(
            <div>
                <Header username="Test"/>
                <Footer />
            </div>
        )
    }
}
class Header extends React.Component{
    render() {
        return(
            <header>
                <p>This is the header, {this.props.username}</p>
            </header>
        )
    }
}

class Footer extends Component{
    render(){
        const date = new Date()
        const time = date.getHours()
        return(
           <div>
               <h2>It's now {time} o'clock</h2>
           </div> 
        )
    }        
}

export default ClassApp