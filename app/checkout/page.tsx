import React, { Suspense } from 'react'
import Heading from '../Components/Heading'
import Checkout from './Checkout'

export default function page() {
  return (
    <div className='flex flex-col md:flex-row'>
    <Heading
    title='Checkout'
    />
    <Checkout
    />
    </div>
  )
}
