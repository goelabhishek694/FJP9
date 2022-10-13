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
        <TextField
          id="outlined-basic"
          label="Full Name"
          fullWidth
          variant="outlined"
          margin="dense"
        />
        <Button variant="outlined" color="secondary">
          <IconButton color="secondary">
            <CloudUploadIcon/>
          </IconButton>
          Upload Profile Image
        </Button>
      </div>
    </div>
  );
}

export default index;
