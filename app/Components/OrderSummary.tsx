import React from "react";
import { FaUser, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import useUserPaymentData from "../Others/hooks/useUserPaymentData";
import useCartDetails from "../Others/hooks/useCartDetails";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

export default function OrderSummary({totalPrice}:{totalPrice:number}) {
  const { userdetails } = useUserPaymentData();
  const { finalCart } = useCartDetails();


  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex flex-col gap-4 md:gap-8 h-full">
        {/* User Details */}

        <div className="flex flex-col gap-4">
          <p className="text-slate-400 text-sm">User Details</p>

          <div className="flex gap-4 text-xs justify-start items-start">
           
            <div className="grid grid-cols-3 text-sm">
              <div className="flex flex-col gap-4">
              <p className="flex flex-col ">
                <div className="flex">
                <FaUser className="mr-2 text-blue-500" />
                <span className=" mr-2 text-sm">Name : </span>
                </div>
                <span className="mt-2"> {userdetails.name}</span>
              </p>
              <p className="flex flex-col ">
                <div className="flex">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <span className=" mr-2 text-sm">Address : </span>
                </div>
                <span className="mt-2"> {userdetails.address}</span>
              </p>
              </div>
              <div className="flex flex-col gap-4">
              <p className="flex flex-col ">
                <div className="flex">
                <FaUser className="mr-2 text-blue-500" />
                <span className=" mr-2 text-sm">Contact : </span>
                </div>
                <span className="mt-2"> {userdetails.contact}</span>
              </p>
           
              <p className="flex flex-col ">
                <div className="flex">
                <FaUser className="mr-2 text-blue-500" />
                <span className=" mr-2 text-sm">Email : </span>
                </div>
                <span className="mt-2"> {userdetails.email}</span>
              </p>
              </div>
            {typeof document !== "undefined" && userdetails.name && (
              <Image
                src={URL?.createObjectURL(userdetails.profile)}
                className="sm:block border-2 border-black hidden h-20 w-20 rounded-full mb-2"
                height={40}
                width={40}
                alt={userdetails.name}
              />
            )}
          </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="flex flex-col gap-4">
          <p className="text-slate-400 text-sm">
            Order Details ({finalCart.length})
          </p>
          <div className="flex flex-col gap-2 max-h-40 overflow-auto">
            {finalCart.map((item) => (
              <div key={item.id} className="grid grid-cols-2 justify-center items-center bg-slate-50 rounded-lg p-2 ">
                
                <div className="flex gap-2  justify-center items-center">
                <p className="text-blue-500">#{item.id}</p>
                <span className="text-xs w-full h-full">{item.title}</span >
                </div>
               <div className="flex justify-around items-center">
               <Image src={item.image} height={20} width={20} alt={item.title}/>
               <span className="text-xs" >Rs {item.price}</span >
               </div>
              
              </div>
              
          
            ))}
          </div>
          <hr/>
          <p>Total :<span className="font-bold"> Rs {totalPrice.toFixed()} </span> <span className="text-slate-400 ml-4">*Free Shipping</span></p>
        </div>
      </div>
    </div>
  );
}
