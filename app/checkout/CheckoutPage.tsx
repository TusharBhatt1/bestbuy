"use client";
import Empty from "@/public/empty.svg"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useCartDetails from "../Others/hooks/useCartDetails";
import { OrderDetailsProps } from "../@types";
import Button from "../Components/Button";
import TotalPrice from "../Components/TotalPrice";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

export default function CheckoutPage({
  orderDetails,
}: {
  orderDetails: OrderDetailsProps;
}) {
  const { products } = orderDetails;
  const { setExistingCart, setFinalCart, finalCart, onDelete } =
    useCartDetails();
  const router = useRouter();

  // Set the existing cart when the component mounts
  useEffect(() => {
    setExistingCart(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set the final cart and log it when the existing cart changes
  useEffect(() => {
    setFinalCart();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setExistingCart]);

  const onClick = () => {
    toast("Almost there!");
    router.push("/checkout/details");
  };

  if (finalCart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80">
      
        <Image 
        alt="Empty"
        src={Empty}
         height={200} width={200}/>
        <Link href="/" className=" mt-4 flex flex-col justify-center items-center">
        <p className="text-lg font-semibold mb-2">Your Cart is Empty</p>
          <p className="text-blue-500 cursor-pointer">
            Explore Products
          </p>
        </Link>
      </div>
    );
  }
  const handleDelete = (id: number) => {
    onDelete(id);
    toast.error("Removed");
  };

  return (
    <div className=" shadow-md p-2 overflow-hidden">
      <div className="max-w-screen-xl  mx-auto px-4 md:px-8">
        <div className="items-start justify-end md:flex"></div>
        <div className="items-center justify-between md:flex">
          <div
            className="max-w-lg cursor-pointer"
            onClick={() => router.push("/")}
          >
            <BiArrowBack size={30} />
          </div>
          <div className=" w-1/4 hidden sm:flex ">
            <Button label="Checkout" onClick={onClick} />
          </div>
        </div>
        <div className=" relative p-2  h-max overflow-auto text-center">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-6">Product</th>
                <th className="py-3 pr-6">Quantity</th>
                <th className="py-3 pr-6">Available</th>
                <th className="py-3 pr-6">Price</th>
                <th className="py-3 pr-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 p-2 divide-y">
              {finalCart.map((item, idx) => (
                <tr key={idx}>
                  <Link href={`/product/${item.id}`}>
                    <div className="flex justify-start items-center p-2 gap-4 text-xs">
                      <Image
                        src={item.image}
                        width={20}
                        height={20}
                        className="rounded-full w-10 h-10"
                        alt={item.title}
                      />

                      <td className=" text-xs whitespace-wrap">{item.title}</td>
                    </div>
                  </Link>

                  <td className="pr-6 py-4 whitespace-nowrap">
                    {item.quantity | 1}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-2 rounded-full font-semibold text-xs text-green-600 bg-green-50">
                      In Stock
                    </span>
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    &#x20B9; {item.price}
                  </td>
                  <td className="text-right whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="py-1.5 px-3 text-white bg-red-400 hover:text-gray-500 duration-150 hover:bg-red-500 border rounded-lg"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TotalPrice />
        <div className=" flex sm:hidden justify-end mt-10 ">
          <Button label="Checkout" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
