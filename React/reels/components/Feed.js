import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth';
import Navbar from './Navbar'
import Upload from './Upload'
import { db } from '../firebase'
import Post from './Post'
function Feed() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("user", user);
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("doc", doc.data());
      setUserData(doc.data());
    });
    return () => unsub();
  }, [user]);

  //get posts from db -> works as CDM
  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (snapshot) => {
      let tempArray = [];
      snapshot.docs.map(doc => tempArray.push(doc.data()))
      setPosts([...tempArray]);
    })

    return ()=>unsub()
  }, []);
  
  return (
    <div className="feed-container">
      <Navbar userData={userData} />
      <Upload userData={userData} />
      <div className="videos-container">
        {
          posts.map((post)=><Post postData={post}/>)
        }
      </div>
    </div>
  );
}

export default Feed