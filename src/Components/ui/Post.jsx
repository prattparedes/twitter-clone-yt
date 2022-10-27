import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rafeh Qazi{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @cleverqazi
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>
        <img
            src="https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47nwgfvuy670e0ztvewofv7yr6pmao3e6z6w7lj2if&rid=giphy.gif&ct=g"
            alt=""
          />
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
      </div>
    </div>
  );
}

export default Post;
