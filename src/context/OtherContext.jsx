import { createContext, useState } from "react";

export const OtherContext = createContext();

export function OtherContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [toastType, setToastType] = useState(null);

  return (
    <OtherContext.Provider value={{ theme, setTheme, toastType, setToastType }}>
      {children}
    </OtherContext.Provider>
  );
}
