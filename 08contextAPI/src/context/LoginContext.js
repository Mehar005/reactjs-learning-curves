import { createContext, useContext } from "react";

export const LoginContext = createContext();

export function useLoginContext() {
  return useContext(LoginContext);
}
