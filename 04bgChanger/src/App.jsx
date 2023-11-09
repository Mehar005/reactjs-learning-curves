import { useState, useCallback } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("violet");

  const handleColorChange = useCallback((color) => {
    setColor(color);
  }, []);
  return (
    <div style={{ backgroundColor: color }} className="w-full h-screen">
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 bg-white rounded-3xl shadow-md mx-auto px-6 py-2 fixed bottom-8">
          <Button handleColorChange={handleColorChange} color="red" />
          <Button handleColorChange={handleColorChange} color="green" />
          <Button handleColorChange={handleColorChange} color="yellow" />
          <Button handleColorChange={handleColorChange} color="orange" />
          <Button handleColorChange={handleColorChange} color="gray" />
          <Button handleColorChange={handleColorChange} color="black" />
          <Button handleColorChange={handleColorChange} color="pink" />
        </div>
      </div>
    </div>
  );
}

export default App;
