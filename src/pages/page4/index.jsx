import React from "react";
import Button from "../../components/button";
import Confirmation from "../../components/confirmation";
import PageTitle from "../../components/pageTitle";
import Steps from "../../components/steps";
import okLogo from "./../../assets/ok.png";
import  logo  from "./../../assets/logo.png";
const WelcomePage4 = () => {
  return (
    <div>
      <Steps totalSteps={4} currentSteps={4} />
      <PageTitle avatar={{ src: logo, alt: "logo" }} title={"Eden"} />
      <Confirmation
        avatar={{ src: okLogo, alt: "logo" }}
        title={"congratulations"}
        desc={"Welcome to board"}
      />
      <Button onClick={() => console.log("Launch")} text={"Launch"} />
    </div>
  );
};
export default WelcomePage4;
