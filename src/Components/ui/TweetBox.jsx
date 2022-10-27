import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault()

    addDoc(collection(db, "posts"), {
      displayName: 'Pratt Thomas',
      username: 'xmiauri',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    });

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          type="text"
          placeholder="Optional: Enter image URL"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
