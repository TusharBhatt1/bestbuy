"use client";
import Heading from "@/app/Components/Heading";
import OrderSummary from "@/app/Components/OrderSummary";
import PaymentForm from "@/app/Components/forms/PaymentForm";
import useCartDetails from "@/app/Others/hooks/useCartDetails"


export default function PaymentPage() {
  const { finalCart } = useCartDetails();
  const totalPrice = finalCart.reduce((a, b) => a + b.price, 0);


  return (
    <div className="flex mt-4 w-full justify-center items-center">
      <div className="shadow-xl p-4  overflow-x-auto">  
        <OrderSummary />
        <hr />
        <PaymentForm totalPrice={totalPrice} />
      </div>
    </div>
  );
}
