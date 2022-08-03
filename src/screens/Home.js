import React from "react";
import logo from "../assets/logo_medik.png";

function Home() {
  return (
    <div
      className='mainPage'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img src={logo} alt='logo' />
    </div>
  );
}

export default Home;
