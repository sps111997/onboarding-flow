import React from "react";
import "./../card/index.css";
const Cards = ({ avatar, title, desc, onClick, className }) => {
  return (
    <div className={className}  onClick={onClick}>
      <img src={avatar.src} alt={avatar.alt} />
      <h4>
        <b>{title}</b>
      </h4>
      <p>{desc}</p>
    </div>
  );
};
export default Cards;
