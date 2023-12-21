"use client";
import { OrderDetailsProps } from "@/app/@types";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import useCart from "@/app/Others/hooks/useCartModal";
import { useRouter } from "next/navigation";
import useCartDetails from "@/app/Others/hooks/useCartDetails";
import Image from "next/image";
import toast from "react-hot-toast";

export default function CartModal({
  orderDetails,
}: {
  orderDetails: OrderDetailsProps;
}) {
  const { products } = orderDetails;
  const { setFinalCart, finalCart, setExistingCart } = useCartDetails();

  const totalPrice = finalCart.reduce(
    (a, item) => (a + item.price * item.quantity) | 1,
    0
  );
  useEffect(() => {
    setExistingCart(products);
  }, []);
  useEffect(() => {
    setFinalCart();
  }, [setExistingCart]);

  const cartSize = finalCart.length;

  const cartModal = useCart();
  const router = useRouter();

  const onSubmit = () => {
    if (cartSize === 0) {
      toast("Add Products");
      router.push("/");
      cartModal.onClose();
    } else {
      router.push("/checkout");
      cartModal.onClose();
    }
  };

  let bodyContent;

  if (cartSize === 0) {
    bodyContent = (
      <div>
        <p className="text-center font-bold"> Cart is Empty</p>
      </div>
    );
  } else
    bodyContent = (
      <>
        <div className="flex justify-center p-4 gap-2 w-full items-center "></div>
        <div className="flex flex-col gap-5 justify-center items-center">
          {finalCart.map((product) => (
            <div key={product.id} className="flex w-full justify-between">
              <p className="text-sm">
                <li>{product.title}</li>
              </p>

              <Image
                src={product.image}
                height={30}
                alt={product.title}
                width={30}
              />
              <hr></hr>
            </div>
          ))}
        </div>
      </>
    );
  const footer = (
    <div>
      <hr />
      <p>Total Price : Rs {totalPrice}</p>
    </div>
  );
  return (
    <Modal
      isOpen={cartModal.isOpen}
      isCart
      onClose={cartModal.onClose}
      title="Your Cart"
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footer}
      actionLabel={cartSize === 0 ? "Buy Something" : "Move to Checkout"}
    />
  );
}
