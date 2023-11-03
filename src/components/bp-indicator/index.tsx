import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export default function BpIndicator({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={twMerge(
        "  after:content-['NA'] sm:after:content-['sm'] md:after:content-['md'] lg:after:content-['lg'] xl:after:content-['xl'] 2xl:after:content-['2xl']",
        className,
      )}
    ></div>
  );
}
