import React, { useState } from "react";
import "../styles.css";
import Input from "./Input";
// import image from "../Login_Design.png";
function App() {
  const [user, setUser] = useState("");

  function getUserName(userName) {
    setUser(userName);
  }

  const [displayName, onDisplay] = useState("");

  function handleSubmit(event) {
    onDisplay(user);
    event.preventDefault();
  }
  return (
    <div>
      <div className="container-left">
        {/* {/* <img className="logo" src={image} alt="sample"></img> */}
        <h1>Hello {displayName}</h1>
      </div>
      <div className="container-right">
        <h1 className="cont-title">Musly</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="userName"
            getUser={getUserName}
            sub="Name"
            pHolder="Username"
          />
          <Input
            type="email"
            name="mail"
            getUser={getUserName}
            sub="Email ID"
            pHolder="Enter valid mail id"
          />
          <Input
            type="text"
            name="password"
            getUser={getUserName}
            sub="Password"
            pHolder="Enter a strong password"
          />
          <Input
            type="text"
            name="confirmPassword"
            getUser={getUserName}
            sub="Confirm Password"
            pHolder="Enter password again"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
export default App;
