import React, { useState } from "react";

const Message = ({ name }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Привет, {name}!!!!!</h1>
    </div>
  );
};

export default Message;