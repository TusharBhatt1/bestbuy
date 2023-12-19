import { ProductType } from "@/app/@types";
import { create } from "zustand";

interface ProductsListProps{
    allProducts:ProductType[],
    setAllProducts:(value:ProductType[])=>void
}

const useProductsList=create<ProductsListProps>((set)=>({
    allProducts:[],
    setAllProducts:(value)=>set({allProducts:value})
}))

export default useProductsList