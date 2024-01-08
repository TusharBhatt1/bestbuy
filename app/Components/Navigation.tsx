"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
export default function Navigation() {

    const pathname=usePathname()
   
  return (
    <div className="flex gap-4 px-24 text-xl sm:text-[24px]">
    <Link href={"/"} >Products {pathname ==="/" && <hr className='border-2 border-blue-500'/>}</Link>
    <Link href={"/wishlist"}  >Wishlists{pathname ==="/wishlist" && <hr className='border-2 border-blue-500'/>}</Link>
    </div>
  )
}
