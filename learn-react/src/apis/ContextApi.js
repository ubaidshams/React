import { createContext, useState } from "react";

export let AuthContext = createContext();
let AuthProvider = ({ children }) => {
  let [state, setState] = useState([
    {
      ename: "Ubaid",
      sal: 20000,
      comp: "TYSS",
    },
    {
      ename: "Junaid",
      sal: 50000,
      comp: "Extramarks",
    },
    {
      ename: "Wahid",
      sal: 40000,
      comp: "Byjus",
    },
  ]);
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
