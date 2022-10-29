import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import user from "../assets/avatar.png";
import { AuthContext } from "../context/auth";
import { doc, onSnapshot } from "firebase/firestore";
import {db} from '../firebase'
function Profile() {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log("user", user);
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("doc", doc.data());
      setUserData(doc.data());
    });
    return () => unsub();
  }, [user]);
  return (
    <div>
      <Navbar userData={userData} />
      <div>
        <div className="profile-intro">
          <div style={{ height: "8rem", width: "8rem", borderRadius: "50%" }}>
            <Image height={200} width={200} src={userData.profilePhoto} />
          </div>
          <div>
            <h1>{userData.fullName}</h1>
            <h1>Posts:{userData.posts?.length}</h1>
          </div>
        </div>
        <div className="profile-posts">
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
        </div>
      </div>
    </div>
  );
}

export default Profile;
