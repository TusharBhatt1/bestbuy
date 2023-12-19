import React from 'react'
import getRandomCart from '../Others/fetch/getRandomCart'
import CheckoutPage from './CheckoutPage'


export default async function Checkout() {

    const orderDetails= await getRandomCart()
  return (
  
   <CheckoutPage
   orderDetails={orderDetails}
   />
  )
}
