"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  const pathName = usePathname();

  if (pathName !== "/" && pathName!=="/checkout/details/payment/confirmation") {
    return (
      <div onClick={() => router.back()} className="ml-7 mt-2 cursor-pointer">
        <IoChevronBackCircleOutline size={30} />
      </div>
    );
  }
}
