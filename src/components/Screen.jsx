import React, { useState } from "react";
import "../index.css";
import Btn from "./Btn";
import Text from "./Text";

export default function Screen() {
  const [color, setColor] = useState("#E2E8F0");
  return (
    <>
      <div
        className="h-80 w-80 rounded-lg mb-[-280px] mx-auto mt-32 p-3"
        style={{ backgroundColor: color }}
      >
        <Text colorHex={color} />
      </div>
      <Btn setColor={setColor} />
    </>
  );
}
