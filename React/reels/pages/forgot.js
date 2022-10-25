import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/Instagram.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import IconButton from "@mui/material/IconButton";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

function index() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { forgetPassword, user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
    
  let handleClick = async () => {
    try {
      console.log(email);
      setLoading(true);
      setError("");
        await forgetPassword(email);
        console.log("email sent");
        router.push('/login')
    } catch (err) {
      console.log("err", JSON.stringify(err));
      setError(err.code);
      setTimeout(() => {
        setError("");
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="insta-mob-bg">
        <div className="carousel">
          <Carousel
            autoPlay={true}
            interval={2000}
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover
            showStatus={false}
          >
            <Image src={bg1} />

            <Image src={bg2} />

            <Image src={bg3} />

            <Image src={bg4} />

            <Image src={bg5} />
          </Carousel>
        </div>
      </div>
      <div>
        <div className="login-card">
          <Image src={logo} />
          <TextField
            id="outlined-basic"
            fullWidth
            label="Email"
            variant="outlined"
            margin="dense"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* if error , then show error */}
          {error != "" && <div style={{ color: "red" }}>{error}</div>}
          

          <Button
            style={{ marginTop: "1rem" }}
            variant="contained"
            fullWidth
            onClick={handleClick}
          >
            Send Mail
          </Button>
        </div>
        <div className="bottom-card">
          Don't Have an account ?{" "}
          <span style={{ color: "blueviolet" }}>Signup</span>
        </div>
      </div>
    </div>
  );
}

export default index;
