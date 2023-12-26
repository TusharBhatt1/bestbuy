"use client";

import { useEffect, useState } from "react";
import useIsLoading from "../Others/hooks/useIsLoading";
import Button from "./Button";

export default function Loader() {
  const loading= useIsLoading()
  const [showBtn , setShowBtn]=useState(false)

  useEffect(() => {
    setTimeout(() => {
   loading.onDone()
    }, 2000);
   
  }, []);

  if (!loading.isShown) {
    return (
      <div className="fixed text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-black h-[100vh] w-screen flex flex-col items-center justify-center">
          <div className="border-t-2 text-center mt-4 border-blue-500 border-solid rounded-full w-8 h-8 animate-spin"></div>
            <p className="text-sm font-bold mt-4 text-pink-400">
              A NextJS + Typescript + Zustand Web Application by
            </p>
            <p className="text-center font-extrabold text-red-100">Tushar Bhatt</p>
            <div className="w-1/2 sm:w-1/4 m-auto">
            <Button 
        onClick={()=>loading.onDone()}
        label="If it takes long."
        />
        </div>
        </div>
       
      </div>
    );
  }

  return null;
}
