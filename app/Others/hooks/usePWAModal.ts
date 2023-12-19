import {create} from "zustand"

interface PWAProps{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const usePWAModal= create<PWAProps>((set)=>({
    isOpen : false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))
export default usePWAModal