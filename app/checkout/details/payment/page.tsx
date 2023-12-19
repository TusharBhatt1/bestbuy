"use client"
import Heading from '@/app/Components/Heading'
import OrderSummary from '@/app/Components/OrderSummary'
import PaymentMethod from '@/app/Components/PaymentMethod'
import getRandomCart from '@/app/Others/fetch/getRandomCart'
import useCartDetails from '@/app/Others/hooks/useCartDetails'
import useUserPaymentData from '@/app/Others/hooks/useUserPaymentData'
import Link from 'next/link'
import React, { useState } from 'react'
import {BiArrowBack} from "react-icons/bi"

export default function Payment() {

    const {finalCart}=useCartDetails()
    const totalPrice = finalCart.reduce((a, b) => a + b.price, 0);
   
  return (
    <div className='flex max-h-[70vh] mt-4 w-full justify-center items-center text-xs'>
        <div className='shadow-xl p-4 overflow-x-auto'>
            <Link
            href="/checkout/details">
            <BiArrowBack
            size={20}
            />
            </Link>
        <Heading
        title='Payment'
        />
        <hr/>
        <OrderSummary/>
        <hr/>
        <PaymentMethod
        totalPrice={totalPrice}
        />
       
        </div>
    </div>
  )
}


