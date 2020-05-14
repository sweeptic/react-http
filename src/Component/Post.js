import React from 'react'
import { withRouter } from 'react-router-dom';


const Post = (props) => {
   return (
      <div className="card text-center border-0" onClick={props.clicked}>
         <img className="card-img-top"
            src={props.imgPath}
            alt={props.imgAlt} />
         <div className="card-body p-0">
            <h5 className="card-title border-bottom p-3 ">{props.title}</h5>
            <p className="card-text bg-secondary mt-1 text-white rounded d-inline-flex px-2 mb-3">{props.author}</p>
         </div>
      </div>
   )
}

export default withRouter(Post);