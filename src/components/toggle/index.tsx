import { cn } from "@/utils";
import React, { ReactNode, useId, isValidElement } from "react";

interface ToggleProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "children" | "onClick" | "type"
  > {
  children: ReactNode;
}

type ToggleElementProps = {
  children: React.ReactElement;
};

function Toggle({ children, className, onChange, ...props }: ToggleProps) {
  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);
  const Checked = Toggle.Checked;

  const toggleId = useId();
  return (
    <>
      <input
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange?.(e);
        }}
        checked={checked}
        {...props}
        type="checkbox"
        className="peer hidden"
        id={toggleId}
      />
      <label
        role="switch"
        htmlFor={toggleId}
        className={cn(" cursor-pointer", className)}
      >
        {React.Children.map(children, (child) => {
          if (
            !isValidElement(child) ||
            (checked && child.type !== Checked) ||
            (!checked && child.type === Checked)
          )
            return null;
          return child;
        })}
      </label>
    </>
  );
}

function ToggleChecked({ children }: ToggleElementProps) {
  return <>{children}</>;
}

function ToggleUnchecked({ children }: ToggleElementProps) {
  return <>{children}</>;
}

Toggle.Checked = ToggleChecked;
Toggle.Unchecked = ToggleUnchecked;

export default Toggle;
