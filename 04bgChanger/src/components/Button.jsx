import React from "react";

function Button({ color, handleColorChange }) {
  console.log("rerendered");
  return (
    <button
      style={{ background: color }}
      className="px-3 py-1 outline-none rounded-xl capitalize text-white"
      onClick={() => handleColorChange(color)}
    >
      {color}
    </button>
  );
}

export default React.memo(Button);
