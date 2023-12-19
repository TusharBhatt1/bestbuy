import {create} from "zustand"

interface CartProps{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useCart= create<CartProps>((set)=>({
    isOpen : false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))
export default useCart