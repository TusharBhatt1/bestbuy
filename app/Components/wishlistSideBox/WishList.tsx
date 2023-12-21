"use client"
import WishListDetails from './WishListDetails'
import useWishListModal from '@/app/Others/hooks/useWishlistModal'

export default function WishList() {
  
  const {all_wishlists}=useWishListModal()
  return (
 
    <WishListDetails
    all_wishlists={all_wishlists}
    />


  )
}
