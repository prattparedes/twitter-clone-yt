import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/userSlice";
import "./ProfileBox.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";


function ProfileBox() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function logOut() {
    signOut(auth);
    dispatch(logout())
  }

  return (
    <div className="profileBox" onClick={logOut}>
      <Avatar className="profileBox__Avatar" src={user.photoUrl} />
      <div className="profileBox__description">
        <div className="profileBox__name">
          {user.displayName.split(" ").slice(0, 2).join(" ")}
        </div>
        <p className="profileBox__email">{user.email}</p>
      </div>
    </div>
  );
}

export default ProfileBox;
