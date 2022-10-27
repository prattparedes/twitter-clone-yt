import React from 'react'
import './Feed.css'
import Post from './ui/Post'
import TweetBox from './ui/TweetBox'

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed