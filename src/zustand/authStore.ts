import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  // token: string | null;
  // setAuth: (token: string) => void;
  // clearAuth: () => void;
  setIsAuthenticated: (status: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  // token: null,
  // setAuth: (token) => set({ isAuthenticated: true, token }),
  // clearAuth: () => set({ isAuthenticated: false, token: null }),
  setIsAuthenticated: (status) => set({ isAuthenticated: status })
}));

export default useAuthStore;
