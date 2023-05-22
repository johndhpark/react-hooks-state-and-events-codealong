import React, { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);

  const toggleHandler = () => {
    setOn((status) => !status);
  };

  return <button onClick={toggleHandler}>{on ? "ON" : "OFF"}</button>;
}

export default Toggle;
