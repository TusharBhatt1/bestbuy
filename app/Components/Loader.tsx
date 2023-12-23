"use client"

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
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-black h-[100vh] w-screen flex flex-col items-center justify-center">
          <div className="border-t-2 border-blue-500 border-solid rounded-full w-4 h-4 animate-spin"></div>
          <div className="mt-4 text-blue-500 text-center font-bold text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  return null; 
}
