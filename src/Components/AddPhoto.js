import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink){
            this.props.onAddPhoto(post)
            document.getElementById('imgForm').reset()
        }

    }

    render() {
        return (
    <div>
        <h1> Photowall </h1>
        <div className="form">
          <form id = "imgForm" onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="Link" name="link"/>
               <input type ="text" placeholder="Desciption" name="description"/>
               <button> Post </button>
               <Link to="/"><i className="fa-solid fa-backward fa-3x nav-home"></i></Link>
          </form>
        </div>
    </div>
    )
    }
}



export default AddPhoto