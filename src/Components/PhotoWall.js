import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//anchor tag, href attribute
function PhotoWall(props) {
return  <div> 
            <h1>{props.title}</h1>
             <Link className = "addIcon" to="/AddPhoto"><i className="fa-solid fa-circle-plus fa-7x"></i> </Link> 
             <div className="photoGrid" >
                  {props.posts
                    .sort(function(x,y) {
                        return  y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
             </div>
        </div>
}

PhotoWall.propTypes = {
    title : PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


 export default PhotoWall