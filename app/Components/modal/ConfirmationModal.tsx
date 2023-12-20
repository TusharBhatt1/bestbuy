"use client";
import Modal from '@/app/Components/modal/Modal';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import useCartDetails from '../../Others/hooks/useCartDetails';
import OrderDetail from '../OrderSummary';
import OrderSummary from '../OrderSummary';
import toast from 'react-hot-toast';

export default function ConfirmationModal () {
  const router = useRouter();
  const {finalCart,resetFinalCart}=useCartDetails()

  const [orderPlaced, setOrderPlaced] = useState(false); 

  const onSubmit = useCallback(() => {
   
    setOrderPlaced(true)
    router.push("/") 
    resetFinalCart()

  }, []);
   
  const totalPrice=finalCart.reduce((a,b)=>a+b.price,0).toFixed()

  useEffect(() => {
    setTimeout(() => {
      setOrderPlaced(true); 
      toast.success("ORDER PLACED")
    }, 2000);
  }, []);

  let body;
  if (orderPlaced===true) {
    body = (
      <div className='zoomIn flex flex-col justify-center items-center gap-2'>
        <p className='text-green-500  font-extrabold text-center'>CONGRATULATIONS</p>

        <div className='flex flex-col justify-center items-center gap-4'>
          <OrderSummary/>
          <hr/>
          <p className='text-center font-bold text-black'>Paid ₹ <span className='text-green '>{totalPrice}</span> </p>
           <p className='text-center text-slate-400'>Arrival Date is 25/12/23</p>
        </div>
      </div>
    );
  } 
  if(orderPlaced===false) {
    body = (
      <div className='flex justify-center relative items-center'>
        <div className='rounded-full rotate h-40 w-40 border-t-4 border-black'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <p className='text-center text-sm'>Placing Your Order</p>
        </div>
      </div>
    );
  }

  if(finalCart.length===0 && !orderPlaced){
   
    body=(
      <div>
        <p className='font-bold text-center text-red-600 text-2xl '>Cart Is Empty</p>
      </div>
    )
  }

  return (
    <Modal
      title={orderPlaced ? "Order Placed" : ""}
      disabled={!orderPlaced}
      isOpen
      actionLabel={orderPlaced ? "Move to Home Page" :" Almost there"}
      onSubmit={onSubmit}
      body={body}
      onClose={onSubmit}
    />
  );
}
