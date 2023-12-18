import React, { useState } from "react";

const Event = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");
  const [name,setName]=useState("Click Me")
  const bgChange = () => {
    setBackgroundColor("blue"); // Change the color here to what you desire
    setName("rohan")
  };

  return (
    <div style={{ backgroundColor }}>
      <button onMouseOver={bgChange}>{name}</button>
    </div>
  );
};

export default Event;
