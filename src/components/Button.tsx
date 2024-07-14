import { MouseEvent } from "react";

interface ButtonProps {
  buttonName: string;
  bgColor?: string;
  textColor?: string;
  paddingY?: string;
  marginY?: string;
  buttonWidth?: string;
  opacity?: string;
  hover?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  buttonName,
  bgColor,
  textColor,
  paddingY,
  marginY,
  buttonWidth,
  opacity,
  hover,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`${bgColor ? bgColor : "bg-[#1A764F]"} rounded ${
        textColor ? textColor : "text-white"
      } font-semibold mx-1 ${marginY ? marginY : "my-2"}   ${paddingY ? paddingY : "py-1"} px-4 ${opacity}  ${
        hover ? "hover:bg-white hover:text-green" : ""
      } ${buttonWidth ? buttonWidth : null}`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
