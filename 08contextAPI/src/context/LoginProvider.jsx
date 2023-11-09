import { useState } from "react";
import { LoginContext } from "./LoginContext";

export default function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
}
