import React, { useState } from "react";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import LinearProgress from "@mui/material/LinearProgress";
import { Alert } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebase";
import { v4 as uuidv4} from 'uuid'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
function Upload({ userData }) {
  console.log("userData123",userData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const fileLimit = 50;
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file == null) {
      setError("file not selected");
      setTimeout(() => setError(''), 2000);
      return;
    }
    if ((file.size / (1024 * 1024)) > fileLimit){
      setError(`file too large,try uploadinf a file less than ${fileLimit}MB `);
      setTimeout(() => setError(""), 3000);
      return;
    }
    let uid = uuidv4();
    setLoading(true);

    const storageRef = ref(storage, `${userData.uid}/post/${uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const prog =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(prog)
        console.log("Upload is " + prog + "% done");
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors

        console.log(error);
        setError(err.code);
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          let postData = {
            likes: [],
            postId: uid,
            postURL: downloadURL,
            profileName: userData.fullName,
            profilePhotoURL: userData.profilePhoto,
            userId: userData.uid,
            timestamp:serverTimestamp()
          };
          console.log("postData",postData);
          await setDoc(doc(db, "posts", uid), postData);
          console.log("post added to posts collection");
        });
      }
    );
  }

  return (
    <div className="upload-btn">
      {error != "" ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Button
          variant="outlined"
          color="secondary"
          component="label"
          size="large"
        >
          <MovieIcon />
          Upload Media
          <input
            hidden
            accept="*"
            multiple
            type="file"
            onChange={handleChange}
          />
        </Button>
      )}
      {loading && (
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={progress}
          sx={{ mt: "0.5rem", mb: "0.5rem" }}
        />
      )}
    </div>
  );
}

export default Upload;
