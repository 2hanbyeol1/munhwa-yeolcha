import { create } from "zustand";

type UserInfo = {
  id: string;
  email: string;
};

type State = {
  isAuthenticated: boolean;
  userInfo: UserInfo | null;
  provider: string;
  // token: string | null;
};

type Actions = {
  // setAuth: (token: string, user: User) => void;
  setAuth: (userInfo: UserInfo) => void;
  clearAuth: () => void;
  setIsAuthenticated: (status: boolean) => void;
  setProvider: (providerData: string) => void;
};

const initialState: State = {
  isAuthenticated: false,
  userInfo: null,
  provider: ""
  // token: null
};

const useAuthStore = create<State & Actions>((set) => ({
  ...initialState,
  // setAuth: (token, user) => set({ isAuthenticated: true, token, user }),
  // clearAuth: () => set({ isAuthenticated: false, token: null, user: null }),
  setProvider: (providerData) => set({ provider: providerData }), // 사용자의 provider상태. Login할 때 값을 넣어주면
  setAuth: (userInfo) => set({ isAuthenticated: true, userInfo }),
  clearAuth: () => set({ isAuthenticated: false, userInfo: null }),
  setIsAuthenticated: (status) => set({ isAuthenticated: status })
}));

export default useAuthStore;
