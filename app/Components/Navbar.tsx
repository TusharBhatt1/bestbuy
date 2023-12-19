"use client"
import Link from "next/link"
import Search from "./search/Search"
import {AiOutlineSearch} from "react-icons/ai"
import CartIcon from "./cart/CartIcon"
import useCart from "../Others/hooks/useCartModal"
import Theme from "./Theme"
import useWishListModal from "../Others/hooks/useWishlistModal"
import Button from "./Button"

export default function Navbar() {
 
const wishlistModal = useWishListModal()
 const cartModal=useCart()
  return (
    <div
    className="
    flex justify-around items-center
    p-4
    z-10
    fixed w-full bg-white
    shadow-md"
    >
    <Link
    href="/"
    >
    Home
    </Link>
    
    <div
    className="hidden sm:block">
        <Search/>
    </div>

    {/* mobile view */}
    <div
    className="block sm:hidden">  
        <AiOutlineSearch
        size={20}/>
    </div>
    
    <span className="cursor-pointer" onClick={cartModal.onOpen}>
    <CartIcon/>
   </span>
   <button
   className=" block sm:hidden border-2 cursor-pointer hover:bg-black hover:text-white border-blue-500 p-1 rounded-xl"
   onClick={wishlistModal.onOpen}>
    Create WishList
   </button>
    {/* <Theme/> */}
   
    </div>
  )
}
