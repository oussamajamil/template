import { cn } from "../../utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export default function Card({ className, children, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        "bg-white dark:bg-slate-800 rounded transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}
