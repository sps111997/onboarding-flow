import React from "react";
import "./../pageTitle/index.css";
const PageTitle = ({ avatar, title }) => {
  return (
    <div className="logoContainer">
      <img src = {avatar.src} alt={avatar.name} />
      <h3>
        {title}
      </h3>
    </div>
  );
};
export default PageTitle;
