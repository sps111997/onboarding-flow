import React from "react";
import { useState } from "react";
import Cards from "../card";
import "./../forms/index.css";
import groupLogo from "./../../assets/group.png";
import personLogo from "./../../assets/person.png";
const InputCards = () => {
  const [isSelected, setIsSelected] = useState(1);
  const clicked = (value) => {
    setIsSelected(value);
    console.log('hello', isSelected);
  };
  return (
    <div className="cardContainer">
      <Cards
        className={isSelected === 1 ? "card active" : "card"}
        avatar={{ src: personLogo, alt: "selfIcon" }}
        title={"For MySelf"}
        desc={"Write better thing More clearly Stay organized "}
        onClick={() => clicked(1)}
      />
      <Cards
        className={isSelected === 2 ? "card active" : "card"}
        avatar={{ src: groupLogo, alt: "teamIcon" }}
        title={"With MyTeam"}
        desc={"wiki's, docs, talks &  Project all in one place"}
        onClick={() => clicked(2)}
      />
    </div>
  );
};
export default InputCards;
