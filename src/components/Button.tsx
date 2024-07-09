import React from "react";

interface ButtonProps {
  buttonName: string;
  bgColor?: string;
  textColor?: string;
  paddingY?: string;
  marginY?: string;
  buttonWidth?: string;
  onClick: () => void;
}

const Button = ({ buttonName, bgColor, textColor, paddingY, marginY, buttonWidth, onClick }: ButtonProps) => {
  return (
    <button
      className={`${bgColor ? bgColor : "bg-green"} rounded ${
        textColor ? textColor : "text-white"
      } font-semibold mx-1 ${marginY ? marginY : "my-2"}   ${
        paddingY ? paddingY : "py-1"
      } px-4  hover:bg-white hover:text-green ${buttonWidth ? buttonWidth : null}`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
