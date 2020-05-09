import React from 'react'

const Post = (props) => {
   return (
      <div className="card border-primary mb- text-center">
         <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">author</p>
         </div>

      </div>
   )
}

export default Post
