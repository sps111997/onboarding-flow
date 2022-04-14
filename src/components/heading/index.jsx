import React from "react";
import "./../heading/index.css";
const Heading = ({ title, description }) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
    </div>
  );
};
export default Heading;
