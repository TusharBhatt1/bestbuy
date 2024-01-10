"use client";
import Heading from "@/app/Components/Heading";
import OrderSummary from "@/app/Components/OrderSummary";
import PaymentForm from "@/app/Components/forms/PaymentForm";
import useCartDetails from "@/app/Others/hooks/useCartDetails"


export default function PaymentPage() {
  const { finalCart } = useCartDetails();
  const totalPrice = finalCart.reduce((a,b) => a + b.price, 0);


  return (
    <div className="flex mt-4 w-full md:w-[70vw] shadow-lg m-auto justify-center items-center">
      <div className="grid grid-rows-2 md:gap-8 md:h-[70vh] md:grid-cols-2 p-7 overflow-x-auto">  
        <OrderSummary totalPrice={totalPrice} />
        <PaymentForm totalPrice={totalPrice} />
       
      </div>
    </div>
  );
}
