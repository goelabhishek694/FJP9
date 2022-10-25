import React from "react";
import Image from "next/image";
import logo from "../../assets/Instagram.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

function index() {
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
          />
          <TextField
            id="outlined-basic"
            label="Password"
            fullWidth
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="outlined-basic"
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="dense"
          />
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            component="label"
          >
            <CloudUploadIcon />
            Upload Profile Image
            <input hidden accept="image/*" type="file" />
          </Button>

          <Button style={{ marginTop: "1rem" }} variant="contained" fullWidth>
            Sign Up
          </Button>
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
