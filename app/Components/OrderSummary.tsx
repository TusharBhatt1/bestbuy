import React from "react";
import { FaUser, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import useUserPaymentData from "../Others/hooks/useUserPaymentData";
import useCartDetails from "../Others/hooks/useCartDetails";
import Image from "next/image";

export default function OrderSummary() {
  const { userdetails } = useUserPaymentData();
  const { finalCart } = useCartDetails();

 
    return (
      <div className="flex gap-4">
        {/* User Details */}
        <div className="flex-1 gap-4">
          <p className="font-bold text-center">User Details</p>

          <div className="flex gap-4 mb-4 justify-center items-start">
            {typeof document !== "undefined" && userdetails.name && (
              <Image
                src={URL?.createObjectURL(userdetails.profile)}
                className="sm:block border-2 border-black hidden h-12 w-12 rounded-full mb-2"
                height={40}
                width={40}
                alt={userdetails.name}
              />
            )}
            <div className="flex flex-col gap-2 mt-4 text-sm">
              <p className="flex items-center">
                <FaUser className="mr-2" />
                <span className="font-semibold mr-2">Name : </span>
                <span className="text-slate-500"> {userdetails.name}</span>
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span className="font-semibold mr-2">Address : </span>
                <span className="text-slate-500"> {userdetails.address}</span>
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                <span className="font-semibold mr-2">Contact : </span>
                <span className="text-slate-500"> {userdetails.contact}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="flex-1">
          <p className="font-bold text-center mb-4">
            Order Details ({finalCart.length})
          </p>
          <div className="flex flex-col gap-2">
            {finalCart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-xs text-slate-500"
              >
                <li className="flex items-center ">{item.title}</li>
                <span>(1)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
}
