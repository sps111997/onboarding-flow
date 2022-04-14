import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import InputCards from "../../components/forms/form3";
import Heading from "../../components/heading";
import PageTitle from "../../components/pageTitle";
import Steps from "../../components/steps";
import  logo  from "./../../assets/logo.png";
const WelcomePage3 = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/next-4"); // This should work now
  };
  return (
    <div>
      <Steps totalSteps={4} currentSteps={3} />
      <PageTitle
        avatar={{ src: logo, alt: "logo" }}
        title={"Eden"}
      />
     <Heading
        title={"How is your plan to use Eden"}
        description={"We'll streamline for setup experience accordingly"}
      />
      <InputCards />
      <Button
        onClick={handle}
        text={"Create WorkSpace"}
      />
    </div>
  );
};
export default WelcomePage3;
