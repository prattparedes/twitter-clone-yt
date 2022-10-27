import { Button } from "@mui/material";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Twitter_logo.svg/1280px-Twitter_logo.svg.png"
            alt=""
          />
        </div>
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          LogIn
        </Button>
        <Button
          variant="outlined"
          className="sidebar__tweet"
          id="sidebar__tweet--gray"
          fullWidth
        >
          Login as Guest
        </Button>
      </div>
    </div>
  );
}

export default Login;
