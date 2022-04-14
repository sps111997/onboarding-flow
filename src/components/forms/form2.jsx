import React from "react";
import "./../forms/index.css";
const PreFilledInputForm = () => {
  return (
    <>
      <label for="workSpaceURL">WorkSpace URL</label>
      <div className="input-group prefix">
        <span className="input-group-addon">www.edon.com/.</span>

        <input type="text" name="input" placeholder="Example" />
      </div>
      <div>
        <label for="workSpaceName">WorkSpace Name</label>
        <input type="text" id="workSpaceName" placeholder="Edon" />
      </div>
    </>
  );
};
export default PreFilledInputForm;
