
"use client"

import useCartDetails from '@/app/Others/hooks/useCartDetails';
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
export default function CartIcon() { 
    
 const {finalCart}=useCartDetails()
  return (
    <div
    className="flex">
    <CiShoppingCart
  size={30}
    />
     <span
     className="
     h-5 w-4 text-center 
     rounded-full text-sm 
     bg-red-100">
    {finalCart.length}
    </span>
    </div>
  )
}
