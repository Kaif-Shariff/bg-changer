import React from "react";
import "../index.css";

export default function Btn({ setColor }) {
  const handleColor = () => {
    const string = "abcdef1234567890";
    let randomIndex = 0;
    let temp = "#";

    for (let i = 0; i < 6; i++) {
      randomIndex = Math.floor(Math.random() * string.length);
      temp += string.charAt(randomIndex);
    }

    setColor(temp);
  };

  return (
    <button
      className="flex justify-center items-center tracking-[3.5px] text-lg bg-[#252930] rounded-lg mx-auto mt-80 px-20 py-5 font-bold text-[#d1d7e0] hover:bg-[#111417]"
      onClick={handleColor}
    >
      Change Color
    </button>
  );
}
