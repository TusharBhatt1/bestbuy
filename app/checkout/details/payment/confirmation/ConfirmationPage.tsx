"use client";
import React from "react";
import Button from "@/app/Components/Button";
import toast from "react-hot-toast";
import useUserPaymentData from "@/app/Others/hooks/useUserPaymentData";
import { useRouter } from "next/navigation";

export default function ConfirmationPage(){
  const { paymentMethod } = useUserPaymentData();
  const router = useRouter();

  const unAuth = () => {
    router.push("/");
    toast.error("Unauthorized");
    return;
  };
  if (paymentMethod === "") {
    unAuth();
  }

  const onClick = () => {
    router.push("/");
  }
  return (
    <div className=" flex flex-col  items-center justify-center h-[70vh]">
      <div className="zoomIn bg-green-500 p-8 rounded-full transform scale-110">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="h-16 w-16 animate__animated animate__heartBeat"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg> */}
      </div>

      <div className=" amimation-bounce flex flex-col gap-8 justify-center items-center ">
        <h1 className=" text-2xl  text-center sm:text-3xl font-bold mt-6 text-green-500">
          Thank you! Your order is successfully placed.
        </h1>
        <Button label="Home" onClick={onClick} />
      </div>
    </div>
  );
};


