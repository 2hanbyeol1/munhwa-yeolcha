"use client";
import React from "react";
import Modal from "@/components/Modal";
import useModalStore from "@/zustand/modalStore";

const TestPage = () => {
  const { toggleModal } = useModalStore();

  return (
    <div>
      <h1>TestPage</h1>
      <button onClick={() => toggleModal("modal1")}>예약 버튼 1</button>
      <Modal id="modal1">
        <div>
          <p>정말 예약 하시겠습니까?</p>
          <button onClick={() => toggleModal("modal1")}>예</button>
          <button onClick={() => toggleModal("modal1")}>아니오</button>
        </div>
      </Modal>

      <button onClick={() => toggleModal("modal2")}>예약 버튼 2</button>
      <Modal id="modal2">
        <div>
          <p>테스트</p>
        </div>
      </Modal>
    </div>
  );
};

export default TestPage;
