import cn from "@/lib/clsx";
import { MouseEventHandler, ReactNode } from "react";

export function PrimaryButton({
  children,
  disabled,
  onClick,
  type,
  className,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}>) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "bg-secondary hover:bg-primary-500 duration-300 transition-all py-3 px-6 text-white rounded-full ",
        className
      )}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  disabled,
  onClick,
  type,
  className,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}>) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "bg-primary-300 hover:bg-secondary hover:text-white duration-300 transition-all py-3 px-6 text-primary-500 rounded-full ",
        className
      )}
    >
      {children}
    </button>
  );
}
