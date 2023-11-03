import { useAppContext } from "@/Context";
import { cn } from "@/utils";
import Button from "../button";
import { useLocation, Link } from "react-router-dom";
import { HiHome, HiInformationCircle } from "react-icons/hi2";
import { BiSolidComponent } from "react-icons/bi";
import { AiFillExperiment } from "react-icons/ai";
import { GiHook } from "react-icons/gi";

type RouterLinkProps = {
  to: string;
  children: React.ReactNode;
};

function RouterLink({ to, children }: RouterLinkProps) {
  const location = useLocation();
  return (
    <Link to={to}>
      <Button
        variant={location.pathname === to ? "filled" : "ghost"}
        className="w-full flex justify-start items-center gap-2"
      >
        {children}
      </Button>
    </Link>
  );
}

export default function SideBar() {
  const { sideBarOpen } = useAppContext();
  return (
    <div
      className={cn(
        "fixed z-10 top-16 left-0 bottom-0 w-[16rem] bg-white/50 dark:bg-white/10 shadow md:shadow-none bg-blur transition-transform md:bg-transparent md:dark:bg-transparent flex flex-col px-4 gap-2 py-6 capitalize",
        {
          "-translate-x-full": !sideBarOpen,
        }
      )}
    >
      <RouterLink to="/">
        <HiHome className="text-lg" />
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/components">
        <BiSolidComponent className="text-lg" />
        <span>Components</span>
      </RouterLink>
      <RouterLink to="/dev">
        <AiFillExperiment className="text-lg" />
        <span>Dev</span>
      </RouterLink>
      <RouterLink to="/hooks">
        <GiHook className="text-lg" />
        <span>hooks</span>
      </RouterLink>
      <RouterLink to="/about">
        <HiInformationCircle className="text-lg" />
        <span>About</span>
      </RouterLink>
    </div>
  );
}
