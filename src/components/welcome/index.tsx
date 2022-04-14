import React from "react";
import "./../welcome/index.css";
const Welcome = ({ avatar, message }) => {
  return (
    <div>
     <img src = {avatar.src} alt={avatar.alt} />
      <p>
        {message}
      </p>
    </div>
  );
};
export default Welcome;
