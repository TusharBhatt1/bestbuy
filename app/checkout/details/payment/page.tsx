import React from 'react'
import PaymentPage from '@/app/Components/PaymentPage'
import Heading from '@/app/Components/Heading'
export default function page() {

  return (
    <div className='flex flex-col sm:flex-row'>
        <Heading title="Payment" />
        <PaymentPage/>
    </div>
   
  )
}
