import { create } from 'zustand';
import { UserResponseType } from "@/types/user.types";
import { ACTION_TYPE } from '@/types/form.types';

interface UserStore {
    user?: UserResponseType;
    type: ACTION_TYPE | null
    setUser: (user?: UserResponseType) => void
    setType: (type: ACTION_TYPE) => void
}

export const useUserStore = create<UserStore>((set) => ({
    user: undefined,
    setUser: (user) => set({ user }),
    type: "CREATE",
    setType: (type) => set({ type })
}));

