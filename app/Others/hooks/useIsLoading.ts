import {create} from "zustand"

interface Loading{
    isLoading:boolean;
    onClose:()=>void
}

const useIsLoading= create<Loading>((set)=>({
    isLoading : true,
    onClose:()=>set({isLoading:false})
}))
export default useIsLoading