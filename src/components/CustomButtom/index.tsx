import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  handleOnClick?: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary" | "warning" | "danger";
  bgClassColor?: string;
  btnType?: "button" | "submit" | "reset";
  className?: string;
  hoverColor?: boolean;
}

export const CustomButton = ({
  children,
  handleOnClick,
  disabled = false,
  type,
  btnType = "button",
  bgClassColor,
  className = "",
}: CustomButtonProps) => {
  const bgClass: string = type
    ? {
        primary: "bg-blue-700 hover:bg-blue-500",
        secondary: "bg-blue-500 hover:bg-blue-400",
        warning: "bg-yellow-700 hover:bg-yellow-500",
        danger: "bg-red-700 hover:bg-red-500",
      }[type]
    : bgClassColor || "bg-blue-700 hover:bg-blue-500";

  const buttonClass: string = `${bgClass} text-white px-4 py-2 rounded transition-colors cursor-pointer ${(
    className || ""
  ).trim()} ${disabled ? "opacity-50 cursor-not-allowed grayscale-50" : ""}`;

  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={buttonClass}
      type={btnType}
    >
      {children}
    </button>
  );
};
