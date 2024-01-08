"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
export default function Navigation() {

    const [selected , setSelected]=useState("Products")
    const pathname=usePathname()
   
  return (
    <div className="flex gap-4 px-24 text-sm sm:text-lg">
    <Link href={"/"} onClick={()=>setSelected("Products")}>Products {pathname ==="/" && <hr className='border-2 border-blue-500'/>}</Link>
    <Link href={"/wishlist"} onClick={()=>setSelected("Wishlist")} >Wishlists{pathname ==="/wishlist" && <hr className='border-2 border-blue-500'/>}</Link>
    </div>
  )
}
