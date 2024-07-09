import React from "react";

interface ButtonProps {
  buttonName: string;
  onClick: () => void;
}

const Button = ({ buttonName, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-green rounded text-white font-semibold mx-1 my-2 py-1 px-4  hover:bg-white hover:text-green"
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
