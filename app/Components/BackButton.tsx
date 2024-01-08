"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  const pathName = usePathname();

  if (pathName !== "/") {
    return (
      <div onClick={() => router.back()} className="ml-4 cursor-pointer">
        <IoChevronBackCircleOutline size={30} />
      </div>
    );
  }
}
