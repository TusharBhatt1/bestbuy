import { OrderDetailsProps } from '@/app/@types'
import React from 'react'
import getRandomCart from '@/app/Others/fetch/getRandomCart'
import CartModal from '../modal/CartModal'
export default async function Cart() {

const orderDetails:OrderDetailsProps = await getRandomCart()


return(
  <CartModal
  orderDetails={orderDetails}
  />
)
}
