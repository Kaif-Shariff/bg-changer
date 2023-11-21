import React, { useState, useEffect } from "react";
import "../index.css";

export default function Text({ colorHex }) {
  const [txt, setTxt] = useState(colorHex);

  useEffect(() => {
    setTxt(colorHex);
  }, [colorHex]);

  const copyColor = () => {
    navigator.clipboard.writeText(txt);
  };

  return (
    <span
      className="text-white text-xl px-3 py-1 rounded-md cursor-pointer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      onClick={copyColor}
    >
      {txt}
    </span>
  );
}
