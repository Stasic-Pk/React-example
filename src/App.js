import React, {useState} from 'react'
import Counter from './components/Counter'
import PostItem from './components/PostItem'
import './styles/app.css'

function App() {
  const [posts, setPosts] = useState([
    {id: "1.", title: "JS", body: "JS - prog language"},
    {id: "2.", title: "JS", body: "JS - prog language"},
    {id: "3.", title: "JS", body: "JS - prog language"},
  ])

  return(
    <div className="app">
      {posts.map(post => 
        <div>
          <PostItem post = {post} key = {post.id}/>
        </div>
      )}
    </div>
  )

}

export default App