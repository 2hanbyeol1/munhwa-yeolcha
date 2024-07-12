import useModalStore from "@/zustand/modalStore";
import React from "react";
import { FaX } from "react-icons/fa6";

interface ModalType {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalType) => {
  const { isOpen, toggleModal } = useModalStore();

  if (!isOpen) return null;

  const stopBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleModal}>
      <div
        className="bg-white p-5 rounded-lg relative shadow-lg w-1/4 max-w-3xl max-h-[90%] overflow-y-auto z-50"
        onClick={stopBubble}
      >
        <button className="absolute top-2 right-2 bg-none border-none text-xl cursor-pointer" onClick={toggleModal}>
          <FaX />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
