import React from 'react'
import WishList from '../Components/wishlistSideBox/WishList'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'

export default function page() {

  return (
  <div className='flex w-full h-full flex-col ml-10'>
    <Link
    href={"/"}>
    <BiArrowBack size={20}/>
    </Link>
   <WishList/>

   </div>
  
  )
}
