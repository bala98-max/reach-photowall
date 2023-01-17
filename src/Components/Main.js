import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route,Routes} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
              }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
              }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
              }]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved )
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }



    componentDidMount() {
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        console.log(this.state.posts)
        return ( 
        
        <div>
            <Routes>
                <Route exact path = "/" element = { <PhotoWall title={'Photowall'} posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>} />
                <Route exact path='/Addphoto' element = {<AddPhoto onAddPhoto={(addedPost) => {this.addPhoto(addedPost)}}/>}/>
            </Routes>

            <Routes>
                <Route path= "/AddPhoto" render = {({history}) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}/>
                )}/>
            </Routes>
         </div>
        )
    }

}


export default Main