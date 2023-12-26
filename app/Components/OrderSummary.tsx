"use client";
import useUserPaymentData from "../Others/hooks/useUserPaymentData";
import useCartDetails from "../Others/hooks/useCartDetails";
import Image from "next/image";

export default function OrderSummary() {
  const { userdetails, paymentMethod } = useUserPaymentData();
  const { finalCart } = useCartDetails();
  
  const imageUrl= URL.createObjectURL(userdetails.profile)
  return (
    <div className="flex">
      <div>
        <Image src={imageUrl} alt="user" height={100} width={100} className=" rounded-full mt-1 mr-2 h-12 w-12"/>
      </div>
      <div className=" flex flex-col items-start  flex-1">
        <p className="font-bold text-center ">User Details</p>
        <div className="flex flex-col gap-2 text-sm  mt-2">
          <p>Name:    <span className="text-green-500"> {userdetails.name}</span></p>
          <p>Address: <span className="text-green-500">{userdetails.address}</span></p>
          <p>Contact: <span className="text-green-500">{userdetails.contact}</span></p>
        </div>
      </div>
      <div className="flex-1">
        <p className="font-bold text-center ">
          Order Details ({finalCart.length})
        </p>
        <div className="flex flex-col mt-2">
          {finalCart.map((item) => (
            <li className="text-sm text-blue-500" key={item.id}>
              {item.title}({item.quantity})
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
