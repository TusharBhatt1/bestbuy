import {create} from "zustand"

interface Loading{
    isShown:boolean,
    onDone:()=>void,

}

const useIsLoading= create<Loading>((set)=>({
    isShown:true,
    onDone:()=>set({isShown:true})
}))
export default useIsLoading