import { create } from 'zustand'

type UserStore = {
  isLoggedIn: boolean;
  toggleIsLoggedIn: () => void;
}


export const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  toggleIsLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}))