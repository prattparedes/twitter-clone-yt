import React, { useEffect } from "react";
import { useState } from "react";
import "./Feed.css";
import Post from "./ui/Post";
import TweetBox from "./ui/TweetBox";
import { db } from "../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");

  useEffect(() => {
    onSnapshot(postsRef, (data) => {
      setPosts(data.docs.map((doc) => ({
        id: doc.id,
          data: doc.data(),
      })));
    });
  }, []);

  useEffect(() => {
    console.log(posts)
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(({id, data: { displayName, username, verified, text, image, avatar}}) => (
          <Post
            key={id}
            displayName={displayName}
            username={username}
            verified={verified}
            text={text}
            image={image}
            avatar={avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
