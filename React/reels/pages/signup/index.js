import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../../assets/Instagram.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { AuthContext } from "../../context/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

function index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, user } = useContext(AuthContext);

  let handleClick = async () => {
    console.log(email);
    console.log(password);
    console.log(fullName);
    console.log(file);

    try {
      setLoading(true);
      setError("");
      const userInfo = await signup(email, password);
      console.log(JSON.stringify(userInfo));

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, `${userInfo.user.uid}/Profile`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          
            console.log(error)
        
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
        console.log("user signed up");
    }
    catch (err) {
      console.log("err", err);
      setError(err.code);
      setTimeout(() => {
        setError('')
      }, 2000);
    }
    setLoading(false);
  }

    return (
      <div className="signup-container">
        <div className="signup-card">
          <Image src={logo} />
          <TextField
            id="outlined-basic"
            fullWidth
            label="Email"
            variant="outlined"
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            fullWidth
            variant="outlined"
            margin="dense"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="dense"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            component="label"
          >
            <CloudUploadIcon />
            Upload Profile Image
            <input hidden accept="image/*" type="file" onChange={(e)=>setFile(e.target.files[0])}/>
          </Button>

          <Button style={{ marginTop: "1rem" }} variant="contained" fullWidth onClick={handleClick}>
            Sign Up
          </Button>
          {error!='' && <div style={{color:"red"}}>{error}</div>}
          <div className="tnc">
            By signing up, you agree to our Terms, Conditions and Cookies
            policy.
          </div>
        </div>
        <div className="bottom-card">
          Already Have an account ?{" "}
          <Link href="/login">
            <span style={{ color: "blueviolet" }}>Login</span>
          </Link>
        </div>
      </div>
    );
}

export default index;
