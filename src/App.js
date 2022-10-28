import "./App.css";

import React, { useState, useEffect } from "react";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./redux/features/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App({ Logged = false }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Feed />
          <Widgets />
        </>
      )}
    </div>
  );
}

export default App;
