import { useState, useEffect, useRef, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, setPassword, length]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="bg-black w-full h-screen pt-4">
      <div className="text-orange-500 w-full max-w-lg mx-auto bg-gray-800 px-5 py-3 ">
        <h1 className="text-center font-bold mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            className="px-3 py-1 w-full bg-white outline-none "
            value={password}
            type="text"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="text-white bg-blue-700  px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex gap-x-3 items-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              onChange={(e) => setLength(e.target.value)}
              value={length}
              className="cursor-pointer"
              ref={passwordRef}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="cursor-pointer">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput" className="cursor-pointer">
              Characterss
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
