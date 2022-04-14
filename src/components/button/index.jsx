import React from "react";
import "./../button/index.css";
const Button = ({ text, isDebounce,onClick }) => {
  return (
    <div>
<button onClick={onClick}>
  {text}
</button>
    </div>
  );
};
export default Button;
