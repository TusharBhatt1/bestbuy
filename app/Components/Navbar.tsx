"use client";
import Link from "next/link";
import Search from "./search/Search";
import CartIcon from "./cart/CartIcon";
import useCart from "../Others/hooks/useCartModal";
import useWishListModal from "../Others/hooks/useWishlistModal";
import useFetchTheme from "../Others/hooks/useFetchTheme";
import useThemeStore from "../Others/hooks/useTheme";
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
      className={`flex justify-around items-center text-blue-500 py-2 z-20 fixed w-full shadow-md`}
    >
      <Link href="/" className="flex flex-col sm:flex-row justify-center gap-1 items-center">
        <Image priority src={theme.merchantLogo} width={40} height={40} alt="logo" />
        <p className="font-bold text-xs sm:text-sm">
          {theme.merchantName}
        </p>
      </Link>

      <div className="hidden sm:block">
        <Search />
      </div>

      {/* mobile view */}
      <Link href={"/wishlist"} className="block text-sm md:hidden">
        <p>Wishlist</p>
      </Link>

      <span
        className=" text-blue-500  cursor-pointer "
        onClick={cartModal.onOpen}
      >
        <CartIcon />
      </span>
      <button
        className=" block sm:hidden border-2 cursor-pointer hover:bg-black text-extrabold hover:text-white border-blue-500 p-1 rounded-xl"
        onClick={wishlistModal.onOpen}
      >
       + Create WishList
      </button>
    </div>
  );
}
