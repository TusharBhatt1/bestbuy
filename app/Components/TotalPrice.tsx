"use client"
import React from 'react';
import useCartDetails from '../Others/hooks/useCartDetails';

export default function TotalPrice() {
  const { finalCart } = useCartDetails();
  const totalPrice = finalCart.reduce((a, b) => a + b.price*(b.quantity || 1), 0);
  const taxRate = 0.1; // Assuming a tax rate of 10%
  const taxAmount = totalPrice * taxRate;
  const discount = 10; // Assuming a discount of 20
  const discountedPrice = totalPrice - discount;

  return (
    <div className="tracking-normal p-4 text-sm w-full rounded-lg flex flex-col  shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="text-base font-bold">Total Price:</span>
        <span className="text-base font-bold">Rs {totalPrice.toFixed(2)}</span>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500">Tax ({(taxRate * 100).toFixed(2)}%):</span>
        <span className="text-xs text-gray-500">+ Rs {taxAmount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-green-500">Discount:</span>
        <span className="text-xs text-green-500">- Rs {discount.toFixed(2)}</span>
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="flex justify-between items-center">
        <span className="text-base font-bold">Final Price:</span>
        <span className="text-base font-bold text-green-500">Rs {discountedPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}