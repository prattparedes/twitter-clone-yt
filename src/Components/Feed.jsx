import React, { useEffect } from "react";
import { useState } from "react";
import "./Feed.css";
import Post from "./ui/Post";
import TweetBox from "./ui/TweetBox";
import { db } from "../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");

  useEffect(() => {
    onSnapshot(postsRef, (data) => {
      setPosts(data.docs.map(doc => doc.data()))
    })
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map(post => (
        <Post
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        image={post.image}
        avatar={post.avatar}
      />
      ))}
    </div>
  );
}

export default Feed;
