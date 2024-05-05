import cn from "@/lib/clsx";
import { MouseEventHandler, ReactNode } from "react";

export function PrimaryButton({
  children,
  disabled,
  onClick,
  type,
  className,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "bg-primary hover:bg-secondary duration-300 transition-all py-3 px-6 text-white rounded-full ",
        className
      )}
    >
      {children}
    </button>
  );
}