import { create } from "zustand";
import { ProductType } from "@/app/@types";

interface OrderDetails {
  existingCart: ProductType[];
  setExistingCart: (value: ProductType[]) => void;
  addedItems:ProductType[],
  addItem:(value:ProductType)=>void,
  finalCart:ProductType[],
  onDelete:(id:number)=>void,
  setFinalCart: () => void
  resetFinalCart:()=>void
  

}

const useCartDetails = create<OrderDetails>((set) => ({
  existingCart: [],
  addedItems:[],
  onDelete:(id)=>set((state)=>({finalCart:state.finalCart.filter((i)=>i.id!==id)})),
  setExistingCart: (value: ProductType[]) => set({ existingCart: value }),
  addItem:(value:ProductType)=>set((state)=>({addedItems:[...state.addedItems,value]})),
  finalCart:[],
  setFinalCart:()=>set((state)=>({finalCart:[...state.addedItems,...state.existingCart]})),
  resetFinalCart:()=>set({finalCart:[]})
}))
 

export default useCartDetails;
 