import { useState } from "react";

import { useLoginContext } from "../context/LoginContext";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div className="flex flex-col gap-5 ">
      <input
        type="text"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-500"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-500"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
