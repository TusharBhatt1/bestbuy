"use client"
import useCartDetails from '../Others/hooks/useCartDetails';

export default function TotalPrice() {
  const { finalCart } = useCartDetails();
  const totalPrice = finalCart.reduce((a, b) => a + b.price*(b.quantity || 1), 0);


  return (
    <div className="flex gap-4 justify-start w-full flex-col">
    <p className="text-xl font-extrabold">cart total</p>
    <div className="flex justify-between">
      <p>Subtotal</p>
      <p>&#8377; {totalPrice}</p>
    </div>
    <hr />
    <div className="flex justify-between">
      <p>Shipping</p>
      <p className="text-slate-500">Free Shipping</p>
    </div>
    <hr />

    <div className="flex justify-between">
      <p>Total</p>
      <p className="font-extrabold text-green-500">&#8377; {totalPrice.toFixed()}</p>
    </div>
   
  </div>
  )
}