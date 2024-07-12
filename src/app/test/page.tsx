"use client";
import Modal from "@/components/Modal";
import useModalStore from "@/zustand/modalStore";
import React from "react";

const page = () => {
  const { toggleModal } = useModalStore();

  return (
    <div>
      <button onClick={toggleModal}>예약 버튼</button>
      <Modal>
        <div>
          <p>정말 예약 하시겠습니까?</p>
          <button>예</button>
          <button>아니오</button>
        </div>
      </Modal>
    </div>
  );
};

export default page;
