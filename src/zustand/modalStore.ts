import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  toggleModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useModalStore;
