import { useAppContext } from "../../Context";
import Toggle from "../toggle";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { motion, MotionConfig } from "framer-motion";

export default function SideBarToggle() {
  const { sideBarOpen, setSideBarOpen } = useAppContext();
  return (
    <MotionConfig
      transition={{
        type: "spring",
      }}
    >
      <Toggle
        checked={sideBarOpen}
        className=" overflow-hidden w-10 aspect-square grid place-items-center  bg-white dark:bg-slate-800  rounded-full text-2xl hover:shadow-sm active:shadow-inner transition-colors"
        onChange={(e) => {
          setSideBarOpen(e.target.checked);
        }}
      >
        <Toggle.Checked>
          <motion.span
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            <AiOutlineMenuFold />
          </motion.span>
        </Toggle.Checked>
        <Toggle.Unchecked>
          <motion.span
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            <AiOutlineMenuUnfold />
          </motion.span>
        </Toggle.Unchecked>
      </Toggle>
    </MotionConfig>
  );
}
