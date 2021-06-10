import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
   const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
   const randomIndex = Math.trunc(Math.random() * 5);
   return COLOR_LIST[randomIndex];
}

function ColorBox() {
   const [color, setColor] = useState(() => {
      // localStorage.getItem: use state saved in localStorage
      const initColor = localStorage.getItem("box_color") || "deeppink";
      console.log("hiendev ~ file: index.jsx ~ line 14 ~ const[color,setColor]=useState ~ initColor", initColor);
      return initColor;
   });

   function handleBoxClick() {
      // get random color --> set color
      const newColor = getRandomColor();
      setColor(newColor);
      // save state but dont use useEffect(). on page reload, still keep the changed color
      localStorage.setItem("box_color", newColor);
   }

   return (
      <div className='color-box' style={{ backgroundColor: color }} onClick={handleBoxClick}>
         COLOR BOX
      </div>
   );
}

export default ColorBox;
