import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth';
import Navbar from './Navbar'
import Upload from './Upload'
import {db} from '../firebase'
function Feed() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log("user", user);
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("doc",doc.data());
      setUserData(doc.data())
    })
    return ()=>unsub()
  },[user])
  return (
    <div className="feed-container">
      <Navbar userData={userData} />
      <Upload userData={userData} />
      <div className="videos-container">
        <div className="post-container">
          <video />
        </div>
        <div className="post-container">
          <video />
        </div>
        <div className="post-container">
          <video />
        </div>
      </div>
    </div>
  );
}

export default Feed