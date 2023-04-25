import React, {useState} from 'react'
import Counter from './components/Counter'
import PostItem from './components/postItem'
import './styles/app.css'
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([
    {id: "1.", title: "JS", body: "JS - prog language"},
    {id: "2.", title: "JS", body: "JS - prog language"},
    {id: "3.", title: "JS", body: "JS - prog language"},
  ])

  return(
    <div className="app">
      <PostList posts = {posts}/>
    </div>
  )

}

export default App