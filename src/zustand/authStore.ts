import { create } from "zustand";

type UserInfo = {
  id: string;
  email: string;
};

type State = {
  isAuthenticated: boolean;
  userInfo: UserInfo | null;
  // token: string | null;
};

type Actions = {
  // setAuth: (token: string, user: User) => void;
  setAuth: (userInfo: UserInfo) => void;
  clearAuth: () => void;
  setIsAuthenticated: (status: boolean) => void;
};

const initialState: State = {
  isAuthenticated: false,
  userInfo: null
  // token: null
};

const useAuthStore = create<State & Actions>((set) => ({
  ...initialState,
  // setAuth: (token, user) => set({ isAuthenticated: true, token, user }),
  // clearAuth: () => set({ isAuthenticated: false, token: null, user: null }),
  setAuth: (userInfo) => set({ userInfo }),
  clearAuth: () => set({ isAuthenticated: false, userInfo: null }),
  setIsAuthenticated: (status) => set({ isAuthenticated: status })
}));

export default useAuthStore;
