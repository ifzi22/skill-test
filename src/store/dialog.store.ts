import { create } from "zustand";

interface DialogStore {
    isShow: boolean
    title?: string
    setDialog: (title?: string) => void
    resetDialog: () => void
}

export const useDialogStore = create<DialogStore>(set => ({
    isShow: false,
    title: "",
    setDialog: (title) => set({ isShow: true, title }),
    resetDialog: () => set({ title: "", isShow: false })
}))