import React from "react";
import "./../steps/index.css";
const Steps = ({ totalSteps, currentSteps }) => {
  const stepsArray = [];
  for (let i = 0; i < totalSteps; i++) {
    stepsArray[i] = i + 1;
  }
  return (
    <div>
      <ul id="progress-num">
        {stepsArray.map((list, index) => {
          return (
            <li
              key={index}
              className={
                list <= currentSteps
                  ? "stepper-item completed"
                  : "stepper-item "
              }
            >
              <div className="step-counter">{list}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Steps;
