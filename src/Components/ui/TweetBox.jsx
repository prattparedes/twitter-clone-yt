import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../../firebaseConfig";
import { selectUser } from "../../redux/features/userSlice";
import { serverTimestamp } from "firebase/firestore";
import "./TweetBox.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { ref, getDownloadURL, uploadBytes, uploadBytesResumable} from "firebase/storage";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  // const [fileToUpload, setFileToUpload] = useState({});
  const user = useSelector(selectUser);

  //FB storage

  // function handleInputFile(file) {
  //   setFileToUpload(file)
  // }

  // function submitFile() {
  //   const imagesRef = ref(storage, `images/${fileToUpload.name}`);
  //   const uploadTask = uploadBytesResumable(imagesRef, fileToUpload);
    
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //       }
  //     },
  //     (error) => {
  //       console.log(error.message);
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at ", downloadURL);
  //       });
  //     }
  //   );
  //   console.log(fileToUpload.name);
  // }

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: user.displayName,
      username: user.displayName.split(" ").slice(0, 2).join("").toLowerCase(),
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: user.photoUrl,
      timestamp: serverTimestamp(),
    });

      setTweetMessage("");
      setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user.photoUrl} />
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
          placeholder="Optional: Enter image/gif URL"
        />
        {/* <div className="tweetBox__imageUpload">
          <label for="file-input">
            <AttachFileIcon className="tweetbBox__attachIcon" />
          </label>
          <input onChange={(e) => handleInputFile(e.target.value)} id="file-input" type="file" />
        </div> */}

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
