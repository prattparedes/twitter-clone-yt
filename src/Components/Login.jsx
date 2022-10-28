import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../redux/features/userSlice';
import { login } from "../redux/features/userSlice";

function Login() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);
    Math.floor(Math.random()*10000)

    function LogInGoogle() {
        signInWithPopup(auth, provider)
        .then((result) => 
        dispatch(login({
            displayName: result.user.displayName.split(' ').slice(0, 2).join(' '),
            email: result.user.email,
            photoUrl: result.user.photoURL,
          })))
        .catch((e) => e.message)
    }

    function LogInGuest() {
      dispatch(login({
        displayName: 'Guest@' + (Math.floor(Math.random()*10000)).toString(),
        email: 'guest@hotmail.com',
        photoUrl: '',
      }))
    }

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
        <Button onClick={LogInGoogle} variant="outlined" className="sidebar__tweet" fullWidth>
          LogIn
        </Button>
        <Button
          onClick={LogInGuest}
          variant="outlined"
          className="sidebar__tweet"
          id="sidebar__tweet--gray"
          fullWidth
        >
          Enter as a guest
        </Button>
      </div>
    </div>
  );
}

export default Login;
