"use client";

import React, { useState } from "react";

interface InputProps {
  inputValue: string | number;
  setInputValue: React.Dispatch<React.SetStateAction<string | number>>;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ inputValue, setInputValue, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <input
      className="bg-transparent border-b-2 text-center p-0.5"
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
