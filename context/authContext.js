import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [auth, setAuth] = useState("");
  const [globalMsg, setGlobalMsg] = useState("");

  // Local Storage: setting & getting data
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuth(token);
    }
  }, []);

  function setNewAuth(newToken) {
    setAuth(newToken);
  }

  return (
    <Context.Provider
      value={{
        auth,
        setNewAuth,
        globalMsg,
        setGlobalMsg,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
