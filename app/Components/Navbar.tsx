"use client";
import Link from "next/link";
import Search from "./search/Search";
import { AiOutlineSearch } from "react-icons/ai";
import CartIcon from "./cart/CartIcon";
import useCart from "../Others/hooks/useCartModal";
import Theme from "./Theme";
import useWishListModal from "../Others/hooks/useWishlistModal";
import Button from "./Button";
import useFetchTheme from "../Others/hooks/useFetchTheme";
import useThemeStore from "../Others/hooks/useTheme";
import { useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  useFetchTheme();
  const { theme } = useThemeStore();

  const wishlistModal = useWishListModal();
  const cartModal = useCart();

  return (
    <div
      style={{
        background: theme.theme["--foreground"],
      }}
      className={`flex justify-around items-center text-blue-400 py-1 z-10 fixed w-full shadow-md`}
    >
      <Link href="/">
       <Image src={theme.merchantLogo} width={40} height={40} alt="logo"/>
       <p className="text-xs font-bold  font-sans text-center">{theme.merchantName}</p>
      </Link>

      <div className="hidden sm:block">
        <Search />
      </div>
    
      {/* mobile view */}
      <div className="block md:hidden">
       <p>Wishlist</p>
      </div>

      <span className=" text-blue-500  cursor-pointer " onClick={cartModal.onOpen}>
        <CartIcon />
      </span>
      <button
        className=" block sm:hidden border-2 cursor-pointer hover:bg-black hover:text-white border-blue-500 p-1 rounded-xl"
        onClick={wishlistModal.onOpen}
      >
        Create WishList
      </button>
     
    </div>
  );
}
