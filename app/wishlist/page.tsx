import React from 'react'
import Heading from '../Components/Heading'
import { BiArrowBack } from 'react-icons/bi'
import WishlistPageSm from './WishlistPageSm'
import WishlistPageLg from './WishlistPageLg'

export default function page() {

  return (
    <>
    <Heading title='All Wishlists'/>
    <div className='flex sm:hidden w-full h-full flex-col ml-10'>
      <WishlistPageSm/>
    </div>

   <div className='hidden sm:flex'>
   {<WishlistPageLg/>}
   </div>
   </>
  
  )
}
