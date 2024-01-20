import React, { useEffect } from "react";
import { useState } from "react";

import colorNames from "colornames";

function ProjectChallenge() {
  const [newColor, setNewColor] = useState("green");
  const [newTxtColor, setNewTxtColor] = useState("black");
  const [isChecked, setIsChecked] = useState(false);

  function handleOnChange(e) {
    console.log(colorNames(e.target.value));
    setNewColor(e.target.value);
  }

  function changeCol() {
    setIsChecked(!isChecked);
    var col = isChecked === true ? "white" : "black";
    setNewTxtColor(col);
    console.log(isChecked, col);
  }

  return (
    <div className="m-5">
      <div
        className=" 
        
        grid
        grid-cols-1
        w-auto
        text-center
        h-auto
        border 
        border-dashed 
        border-black

        p-2"
        style={{ backgroundColor: newColor, color: newTxtColor }}
        id="myDiv"
      >
        {newColor} {colorNames(newColor)}
      </div>

      <input
        type="text"
        autoFocus
        className=" 
        border 
        border-separate  
        border-blue-500 
        mt-2 p-2"
        name=""
        id="myColor"
        onChange={handleOnChange}
      />
      <div className="m-2 p-2 border border-dashed rounded-full">
        <input
          className=""
          type="checkbox"
          name=""
          id="checkBoxOne"
          checked={isChecked}
          onChange={() => changeCol()}
        />
        <label htmlFor="checkBox1">change text color</label>
      </div>
    </div>
  );
}

export default ProjectChallenge;
