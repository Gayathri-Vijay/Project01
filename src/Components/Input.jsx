import React, { useState, useEffect } from "react";

function Input(props) {
  const [userName, setUser] = useState("");
  // var n = "";

  function handleChange(event) {
    const { value } = event.target;
    setUser(value);
    console.log(userName);
  }
  useEffect(() => {}, [userName]);
  function setName(event) {
    handleChange(event);
    console.log("in setname " + userName);
    props.getUser(userName);
  }
  return (
    <div>
      <h4 className="sub-title">{props.sub}</h4>
      <input
        onChange={setName}
        name={props.name}
        type={props.type}
        placeholder={props.pHolder}
      />
    </div>
  );
}

export default Input;
