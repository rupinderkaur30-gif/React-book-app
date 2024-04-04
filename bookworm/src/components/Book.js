import {Component } from "react"
class Book extends Component {
render(){
    console.log(this.props)
    return (<li>
       
        <strong>title : {this.props.book.title}</strong>
    </li>)
}

}

export default Book