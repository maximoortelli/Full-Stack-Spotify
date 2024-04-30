import {create} from "zustand";

interface SuscribeModalStore {
    isOpen: boolean;
    onOpen:() => void;
    onClose:() => void;
}

const useSuscribeModal = create<SuscribeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useSuscribeModal;