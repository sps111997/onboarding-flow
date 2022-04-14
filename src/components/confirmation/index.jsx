import React from "react";
import "./../confirmation/index.css";
const Confirmation = ({ avatar, title, desc }) => {
  return (
    <div>
      <div className="imageContainer">
        <img src={avatar.src} alt={avatar.alt} />
      </div>
      <h1>
        <b>{title}</b>
      </h1>
      <p>{desc}</p>
    </div>
  );
};
export default Confirmation;
