"use client";
import Link from "next/link";
import Search from "./search/Search";
import CartIcon from "./cart/CartIcon";
import useCart from "../Others/hooks/useCartModal";
import useWishListModal from "../Others/hooks/useWishlistModal";
import useFetchTheme from "../Others/hooks/useFetchTheme";
import useThemeStore from "../Others/hooks/useTheme";
import Image from "next/image";
import { IoMdAdd } from 'react-icons/io';
import Navigation from "./Navigation";
import Breadcrumbs from "./Breadcrumbs";


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
      className={`flex flex-col justify-around gap-4  text-blue-500 py-2 sm:p-3 z-20 fixed w-full shadow-md`}
    >
      <Breadcrumbs/>
      <div className="flex w-full justify-between  sm:px-20">
      <Link href="/" className="flex flex-col sm:flex-row justify-center gap-2 items-center">
        <Image priority src={theme.merchantLogo} width={40} height={40} alt="logo" />
        <p className="font-bold text-xs sm:text-xl">
          {theme.merchantName}
        </p>
      </Link>

      <div className="hidden sm:block">
        <Search />
      </div>

      <span
        className=" text-blue-500  cursor-pointer "
        onClick={cartModal.onOpen}
      >
        <CartIcon />
      </span>
      <button
        className=" block sm:hidden border-2 text-sm cursor-pointer hover:bg-black text-extrabold hover:text-white border-blue-500 p-1 rounded-xl"
        onClick={wishlistModal.onOpen}
      >
       + Create new wishlist
      </button>
      </div>
      <div>
        <Navigation/>
      </div>
    </div>
  );
}
