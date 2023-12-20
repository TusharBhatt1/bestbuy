"use client";
import useUserPaymentData from "../Others/hooks/useUserPaymentData";
import useCartDetails from "../Others/hooks/useCartDetails";

export default function OrderSummary() {
  const { userdetails, paymentMethod } = useUserPaymentData();
  const { finalCart } = useCartDetails();

  return (
    <div className="flex">
      <div className=" flex flex-col  items-start  flex-1">
        <p className="font-bold text-center ">User Details</p>
        <div className="flex flex-col gap-2 mt-2">
          <p>Name: {userdetails.name}</p>
          <p>Address: {userdetails.address}</p>
          <p>Contact: {userdetails.contact}</p>
        </div>
      </div>
      <div className="flex-1">
        <p className="font-bold text-center ">
          Order Details ({finalCart.length})
        </p>
        <div className="flex flex-col mt-2">
          {finalCart.map((item) => (
            <li className="text-xs text-slate-500" key={item.id}>
              {item.title}({item.quantity})
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
