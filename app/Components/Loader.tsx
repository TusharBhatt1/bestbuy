"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  if (showLoader) {
    return (
      <div className="fixed text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-black h-[100vh] w-screen flex flex-col items-center justify-center">
          <div className="border-t-2 text-center border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
          <div className="flex mt-8 flex-col">
            <p className="text-sm text-pink-400">
              A NextJS + Typescript + Zustand Web Application by
            </p>
            <p className="text-center font-bold text-red-100">Tushar Bhatt</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
