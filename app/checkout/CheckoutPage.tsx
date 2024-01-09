"use client";
import Empty from "@/public/empty.svg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineDelete } from "react-icons/md";
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
  const totalPrice = finalCart.reduce(
    (a, b) => a + b.price * (b.quantity || 1),
    0
  );

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

  const onCheckout = () => {
    toast.success("Taking you there!");
    router.push("/checkout/details");
  };

  if (finalCart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80">
        <Image alt="Empty" src={Empty} height={200} width={200} />
        <Link
          href="/"
          className=" mt-4 flex flex-col justify-center items-center"
        >
          <p className="text-lg font-semibold mb-2">Your Cart is Empty</p>
          <p className="text-blue-500 cursor-pointer">Explore Products</p>
        </Link>
      </div>
    );
  }
  const handleDelete = (id: number) => {
    onDelete(id);
    toast.error("Removed");
  };
  return (
    <div className="flex gap-2 flex-col justify-center items-center sm:px-12">
      <div className="flex flex-col gap-2  p-2">
        <div className="grid grid-cols-4  justify-center items-center text-center font-bold text-slate-500">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p className="w-[150px] sm:w-auto">
          <Button onClick={onCheckout} label="Buy"/>
          </p>
        </div>
        <hr className=" border-slate-600"/>
        <div className="flex flex-col">
          {finalCart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4  justify-center items-center text-center"
            >
              <div className="flex justify-center items-center">
                <Link href={`/product/${item.id}`}>
                  <div className="flex flex-col sm:flex-row justify-start w-[24vw] items-center p-2 gap-4 text-xs">
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
              </div>
              <p>&#8377; {item.price}</p>
              <p>1</p>
              <span
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer"
              >
                <MdOutlineDelete size={20} className="text-red-500" />
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <TotalPrice/>
    </div>
  );

}
