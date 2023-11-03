import React from "react";
import { ThemeType } from "./utils";

const AppContext = React.createContext<{
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export default AppContext;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext must be used within a AppContext Provider`);
  }
  return context;
}
