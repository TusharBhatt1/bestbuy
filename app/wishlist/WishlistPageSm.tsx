import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import WishLists from '../Components/wishlistSideBox/WishLists'
export default function WishlistPageSm() {
  return (
   <>
    <Link
    href={"/"}>
    <BiArrowBack size={20}/>
    </Link>
   <WishLists/>
   </>
  )
}
