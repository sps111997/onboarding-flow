import React from "react";
import { useNavigate } from 'react-router-dom'
import Button from "../../components/button";
import InputForm from "../../components/forms/form1";
import Heading from "../../components/heading";
import PageTitle from "../../components/pageTitle";
import Steps from "../../components/steps";
import logo from "./../../assets/logo.png";
const WelcomePage = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/next-2"); //
  };
  return (
    <div>
      <Steps totalSteps={4} currentSteps={1} />
      <PageTitle avatar={{ src: logo, alt: "logo" }} title={"Eden"} />
      <Heading
        title={"Welcome! first things first......"}
        description={"You can always change  then better"}
      />
      <InputForm />
      <Button onClick={handle} text={"Create WorkSpace"} />
    </div>
  );
};
export default WelcomePage;
