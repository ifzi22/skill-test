import { create } from "zustand";

type ToastType = {
    title?: string
    type?: ToastStore['type']
    description?: string
}

interface ToastStore {
    isShow: boolean
    title: string
    description?: string
    type: "DANGER" | "SUCCESS"
    timeout: number,
    setTimeout: (timeout: number) => void,
    setToast: (toast: ToastType) => void
    reset: () => void
}

export const useToastStore = create<ToastStore>(set => ({
    isShow: false,
    title: "",
    description: undefined,
    timeout: 2000,
    type: "SUCCESS",
    setToast: (toast) => set({ ...toast, isShow: true }),
    setTimeout: (timeout) => set({ timeout }),
    reset: () => set({ isShow: false, type: "SUCCESS", title: "", description: "" })
}))