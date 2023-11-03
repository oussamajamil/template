import { useAppContext } from "../../Context";
import Toggle from "../toggle";
import { motion, MotionConfig } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useAppContext();
  return (
    <MotionConfig
      transition={{
        type: "spring",
      }}
    >
      <Toggle
        checked={theme === "dark"}
        className="w-10 aspect-square grid place-items-center  bg-white dark:bg-slate-800  rounded-full text-2xl ml-auto hover:shadow-sm active:shadow-inner"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      >
        <Toggle.Checked>
          <motion.span
            initial={{
              rotate: -180,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
            }}
          >
            <MdLightMode />
          </motion.span>
        </Toggle.Checked>
        <Toggle.Unchecked>
          <motion.span
            initial={{
              rotate: 180,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
            }}
          >
            <MdDarkMode />
          </motion.span>
        </Toggle.Unchecked>
      </Toggle>
    </MotionConfig>
  );
}
