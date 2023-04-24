import React, {useState} from 'react'
import Counter from './components/Counter'
import PostItem from './components/PostItem'
import './styles/app.css'

function App() {

  return(
    <div className="app">
      <PostItem/>
    </div>
  )

}

export default App