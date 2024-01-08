import React from "react";
import { FaUser, FaMapMarkerAlt, FaPhone, FaShoppingCart } from "react-icons/fa";
import useUserPaymentData from "../Others/hooks/useUserPaymentData";
import useCartDetails from "../Others/hooks/useCartDetails";

export default function OrderSummary() {
  const { userdetails, paymentMethod } = useUserPaymentData();
  const { finalCart } = useCartDetails();

  return (
    <div className="flex gap-8">
      {/* User Details */}
      <div className="flex-1">
        <p className="font-bold text-center mb-4">User Details</p>
        <div className="flex flex-col gap-2 text-sm">
          <p className="flex items-center">
            <FaUser className="mr-2" />
            <span className="font-semibold">Name:</span>{" "}
            <span className="text-green-500">{userdetails.name}</span>
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span className="font-semibold">Address:</span>{" "}
            <span className="text-green-500">{userdetails.address}</span>
          </p>
          <p className="flex items-center">
            <FaPhone className="mr-2" />
            <span className="font-semibold">Contact:</span>{" "}
            <span className="text-green-500">{userdetails.contact}</span>
          </p>
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
              className="flex justify-between items-center text-xs text-blue-500"
            >
              <li className="flex items-center ">
              
                {item.title}
              </li>
              <span>({item.quantity})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
