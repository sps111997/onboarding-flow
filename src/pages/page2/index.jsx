import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import PreFilledInputForm from "../../components/forms/form2";
import Heading from "../../components/heading";
import PageTitle from "../../components/pageTitle";
import Steps from "../../components/steps";
import logo from "./../../assets/logo.png";
const WelcomePage2 = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/next-3"); // This should work now
  };
  return (
    <div>
      <Steps totalSteps={4} currentSteps={2} />
      <PageTitle avatar={{ src: logo, alt: "logo" }} title={"Eden"} />
      <Heading
        title={"Let set a home for all your work"}
        description={"You can always create another workspace later"}
      />
      <PreFilledInputForm />
      <Button
        onClick={handle}
        text={"Create WorkSpace"}
      />
    </div>
  );
};
export default WelcomePage2;
