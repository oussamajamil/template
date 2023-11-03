import SideBarToggle from "../side-bar-toggle";
import ThemeToggle from "../theme-toggle";

export default function UpBar() {
  return (
    <div className="h-16 z-10 top-0 bg-white/50 dark:bg-white/10 shadow fixed inset-x-0 bg-blur flex items-center px-6 transition-colors">
      <SideBarToggle />
      <ThemeToggle />
    </div>
  );
}
