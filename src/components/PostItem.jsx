import React from 'react'

const PostItem = (props) => {
  return (
  <div className="post">
    <div className="postContent">
      <strong>1. JS</strong>
      <div>
        JS - prog language
      </div>
    </div>
    <div className="postButtons">
      <button>delete post</button>
    </div>
  </div>
  )
}

export default PostItem