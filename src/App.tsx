import useLocalStorage from "./hooks/use-local-storage";
import { booleanSchema, cn, themeSchema } from "./utils";
import AppContext from "./Context";
import UpBar from "./components/up-bar";
import SideBar from "./components/side-bar";
import { Outlet } from "react-router-dom";
import BpIndicator from "./components/bp-indicator";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", themeSchema);
  const [sideBarOpen, setSideBarOpen] = useLocalStorage(
    "sideBarOpen",
    booleanSchema
  );

  return (
    <AppContext.Provider
      value={{ theme, setTheme, sideBarOpen, setSideBarOpen }}
    >
      <div
        className={cn(
          "min-h-[100svh]  pt-16  transition-[padding-left,color,background-color] ",
          {
            "bg-slate-100 text-slate-800 light": theme === "light",
            "bg-slate-900 text-slate-300 dark": theme === "dark",
            "md:pl-[16rem]": sideBarOpen,
          }
        )}
      >
        <UpBar />
        <SideBar />
        <BpIndicator className="fixed z-[999] bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-black text-white opacity-5 rounded p-6 text-6xl" />
        <div className="container mx-auto  h-[calc(100svh-4rem)] p-6 [&>*]:h-full ">
          <Outlet />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
