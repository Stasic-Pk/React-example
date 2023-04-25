import React from 'react'

const PostItem = (props) => {
  return (
  <div className="post">
    <div className="postContent">
      <strong>{props.post.id} {props.post.title}</strong>
      <div>
        {props.post.body}
      </div>
    </div>
    <div className="postButtons">
      <button>delete post</button>
    </div>
  </div>
  )
}

export default PostItem