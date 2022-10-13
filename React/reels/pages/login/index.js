import React from "react";
import Image from "next/image";
import logo from "../../assets/Instagram.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import IconButton from "@mui/material/IconButton";

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

        <div style={{ color: "blue", marginTop:"1rem" }}>Forget Password</div>

        <Button style={{ marginTop: "1rem" }} variant="contained" fullWidth>
          Login
        </Button>
      </div>
      <div className="bottom-card">
        Don't Have an account ?{" "}
        <span style={{ color: "blueviolet" }}>Signup</span>
      </div>
    </div>
  );
}

export default index;
