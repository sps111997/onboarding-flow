import React from "react";
import "./../pageTitle/index.css";
const InputForm = () => {
  return (
    <div>
      <div className="inputContainer">
      <label for="fullName">Full Name</label>
      <input type="text" id="fullName" placeholder="Steve Joe"/>
      </div>
      <div>
      <label for="displayName">Display Name</label>
      <input type="text" id="displayName" placeholder="Steve"/>
      </div>
    </div>
  );
};
export default InputForm;
